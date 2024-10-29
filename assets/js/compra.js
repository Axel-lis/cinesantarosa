var combosSeleccionados = [];
var entradasSeleccionadas = 1; // Por defecto, 1 entrada
var precioEntrada = 0;
let idPeliculaGlobal;

$(document).ready(function () {
  getProducts();

  // Reflejar la entrada por defecto al cargar la página
  actualizarTablaCompra();

  // Escuchar cambios en el select de cantidad de entradas
  $('#cantidadEntradas').on('change', function () {
    let cantidad = parseInt($(this).val());
    if (cantidad < 1) {
      Swal.fire({
        icon: 'warning',
        title: 'Cantidad no válida',
        text: 'La cantidad mínima de entradas debe ser 1.',
      });
      entradasSeleccionadas = 1;
      $(this).val(1);
    } else {
      entradasSeleccionadas = cantidad;
    }
    actualizarTablaCompra();
  });

  // Escuchar clics en el botón "Preparar Pago"
  $('#prepararPago').click(function () {
    if (validarCompra()) {
      procesarCompra();
    }
  });
});

// Botones para agregar productos
$(document).on('click', '.buttonAgregar', function () {
  const producto = {
    id: $(this).data('id'),
    detalle: $(this).data('detalle'),
    precio: $(this).data('precio'),
  };

  if (combosSeleccionados.some((combo) => combo.id === producto.id)) {
    Swal.fire({
      icon: 'info',
      title: 'Producto ya agregado',
      text: 'El producto ya está en el carrito.',
    });
  } else {
    combosSeleccionados.push(producto);
    actualizarTablaCompra();
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: `${producto.detalle} agregado al carrito!`,
    });
  }
});

// Obtener el ID de la película desde la URL
function getMovieIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Traer productos desde la API usando el ID de la película
function getProducts() {
  const idPelicula = getMovieIdFromURL();
  if (!idPelicula) {
    console.error('ID de película no definido en la URL.');
    return;
  }
  // Asignar el valor a la variable global
  idPeliculaGlobal = idPelicula;

  $.ajax({
    url: `https://www.cinesantarosa.com.ar/api/ws/ventashow/${idPelicula}`,
    method: 'GET',
    success: function (response) {
      const data = response.show;
      precioEntrada = parseFloat(data.precio) || 0;

      if (data && data.combos) {
        const productosHabilitados = data.combos.filter((combo) => combo.cbactive === '1');
        $('#productos-container').empty();
        /*! para no cachear imagenes agregar:
          ?v=${Math.random()}
          */
        productosHabilitados.forEach((combo) => {
          const imgUrl = `https://www.cinesantarosa.com.ar/assets/img/combos/${combo.id}/${combo.id}.png`;
          const productoHtml = `
            <div class="col-6 col-md-3 p-3">
              <div class="producto">
                <img src="${imgUrl}" alt="" class="img-fluid">
              </div>
              <button class="buttonAgregar" data-id="${combo.id}" data-detalle="${combo.detalle}" data-precio="${combo.precio}">Agregar</button>
            </div>`;
          $('#productos-container').append(productoHtml);
        });

        actualizarTablaCompra();
      } else {
        console.error('No se encontraron productos habilitados.');
      }
    },
    error: function (error) {
      console.error('Error al obtener los datos:', error);
    },
  });
}

// Actualizar tabla de compra
function actualizarTablaCompra() {
  const tablaBody = $('tbody');
  tablaBody.empty();

  // Agregar entradas a la tabla
  const totalEntradas = entradasSeleccionadas * precioEntrada;
  const filaEntradas = crearFilaCompra(`${entradasSeleccionadas} entrada(s)`, totalEntradas, 'eliminar-entradas');
  tablaBody.append(filaEntradas);

  let totalCompra = totalEntradas;

  // Agregar combos seleccionados a la tabla
  combosSeleccionados.forEach((combo) => {
    const filaCombo = crearFilaCompra(combo.detalle, combo.precio, 'eliminar-combo', combo.id);
    tablaBody.append(filaCombo);
    totalCompra += parseFloat(combo.precio);
  });

  $('.text-center h4').text('Total: ' + formatearPrecio(totalCompra));
}

// Crear fila para la tabla de compra
function crearFilaCompra(detalle, precio, claseBoton, id = '') {
  return $(`
    <tr>
      <td>${detalle}</td>
      <td>${formatearPrecio(precio)}</td>
      <td>
        <button class="btn btn-danger btn-sm ${claseBoton}" data-id="${id}">Eliminar</button>
      </td>
    </tr>
  `);
}

// Botones de eliminar
$(document).on('click', '.eliminar-combo, .eliminar-entradas', function () {
  const id = $(this).data('id');

  if ($(this).hasClass('eliminar-combo')) {
    combosSeleccionados = combosSeleccionados.filter((combo) => combo.id !== id);
  } else {
    entradasSeleccionadas = 1;
    $('#cantidadEntradas').val(1);
  }

  actualizarTablaCompra();
});

// Validar compra --> +de 1 y agotadas
async function validarCompra() {
  try {
    const response = await fetch(`https://www.cinesantarosa.com.ar/api/ws/ventashow/${idPeliculaGlobal}`);
    if (!response.ok) {
      Swal.fire('Error', 'Hubo un problema al verificar la disponibilidad.', 'error');
      return false;
    }

    const data = await response.json();

    if (data.show.agotadas) {
      Swal.fire('Error', 'Lo sentimos, las entradas para esta función están agotadas.', 'error');
      return false;
    }

    if (entradasSeleccionadas < 1) {
      Swal.fire('Error', 'Debes seleccionar al menos una entrada.', 'error');
      return false;
    }

    return true; // Todo está en orden, proceder con la compra.
  } catch (error) {
    console.error('Error al verificar la disponibilidad:', error);
    Swal.fire('Error', 'Hubo un problema con la conexión. Inténtalo de nuevo.', 'error');
    return false;
  }
}

// Procesar compra
function procesarCompra() {
  // Mostrar carga mientras se procesa el pago
  mostrarCarga();

  // Preparar los detalles de la compra
  const detalleCompra = {
    entradas: entradasSeleccionadas,
    productos: combosSeleccionados,
    total: calcularTotalCompra(),
  };

  // Hacer petición POST para preparar el pago
  $.ajax({
    url: 'https://www.cinesantarosa.com.ar/api/ws/preparaPago',
    method: 'POST',
    data: JSON.stringify(detalleCompra),
    contentType: 'application/json',
    success: function (response) {
      ocultarCarga();
      Swal.fire({
        icon: 'success',
        title: 'Pago Preparado',
        text: 'Serás redirigido al portal de pago...',
        showConfirmButton: false,
        timer: 2000,
      });

      // Configurar el botón de pago con el enlace recibido
      $('#pagaMP').data('url', response.init_point);
      $('#pagaMP').attr('href', response.init_point);

      // Simular clic en el botón para iniciar el pago automáticamente
      $('#pagaMP button').click();
    },
    error: function (error) {
      ocultarCarga();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al preparar el pago. Inténtalo nuevamente.',
      });
      console.error('Error en la preparación del pago:', error);
    },
  });
}
// Función para mostrar el estado de carga
function mostrarCarga() {
  $('#progreso').addClass('centrado');
  $('#fader').addClass('darkFader');
}

// Función para ocultar el estado de carga
function ocultarCarga() {
  $('#progreso').removeClass('centrado');
  $('#fader').removeClass('darkFader');
}

// Calcular el total de la compra
function calcularTotalCompra() {
  let total = entradasSeleccionadas * precioEntrada;
  combosSeleccionados.forEach((combo) => {
    total += parseFloat(combo.precio);
  });
  return total;
}

// Formatear precio en formato moneda
function formatearPrecio(numero) {
  const num = parseFloat(numero).toFixed(2);
  const partes = num.split('.');
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return '$' + partes.join(',');
}
