var combosSeleccionados = [];
var entradasSeleccionadas = 1; // Por defecto 1 entrada
var precioEntrada = 0;

$(document).ready(function () {
  getProducts();

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
});

// Botones agregar
$(document).on('click', '.buttonAgregar', function () {
  var productoId = $(this).data('id');
  var productoDetalle = $(this).data('detalle');
  var productoPrecio = $(this).data('precio');

  // Verificar si el producto ya está en el array
  var productoExistente = combosSeleccionados.find(function (combo) {
    return combo.id === productoId;
  });

  if (productoExistente) {
    Swal.fire({
      icon: 'info',
      title: 'Producto ya agregado',
      text: 'El producto ya está en el carrito.',
    });
  } else {
    combosSeleccionados.push({ id: productoId, detalle: productoDetalle, precio: productoPrecio });
    actualizarTablaCompra();
    Swal.fire({
      icon: 'success',
      title: 'Producto agregado',
      text: productoDetalle + ' agregado al carrito!',
    });
  }
});

// Obtener el valor del parámetro 'id' desde la URL
function getMovieIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

// Traer productos desde la API usando el ID de la película
function getProducts() {
  const idPelicula = getMovieIdFromURL();
  console.log('ID de la película:', idPelicula);

  if (!idPelicula) {
    console.error('ID de película no definido en la URL.');
    return;
  }

  $.ajax({
    url: `https://www.cinesantarosa.com.ar/api/ws/ventashow/${idPelicula}`,
    method: 'GET',
    success: function (response) {
      const data = response.show;
      precioEntrada = parseFloat(data.precio);

      if (data && data.combos) {
        $('#productos-container').empty();

        // Filtrar los combos activos
        const productosHabilitados = data.combos.filter((combo) => combo.cbactive === '1');

        $.each(productosHabilitados, function (index, combo) {
          const imgUrl = `https://www.cinesantarosa.com.ar/assets/img/combos/${combo.id}/${
            combo.id
          }.png?v=${Math.random()}`;
          const productoHtml = `
                        <div class="col-6 col-md-3 p-3">
                            <div class="producto">
                                <img src="${imgUrl}" alt="" class="img-fluid">
                            </div>
                            <button class="buttonAgregar" data-id="${combo.id}" data-detalle="${combo.detalle}" data-precio="${combo.precio}">Agregar</button>
                        </div>
                    `;

          $('#productos-container').append(productoHtml);
        });
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
  var tablaBody = $('tbody');
  tablaBody.empty();

  // Calcular el total de entradas
  var totalEntradas = entradasSeleccionadas * precioEntrada;

  var filaEntradas = $('<tr>');
  filaEntradas.append($('<td>').text(entradasSeleccionadas + ' entrada(s)'));
  filaEntradas.append($('<td>').text(formatearPrecio(totalEntradas))); // Formatear totalEntradas
  filaEntradas.append($('<td>').html('<button class="btn btn-danger btn-sm eliminar-entradas">Eliminar</button>'));
  tablaBody.append(filaEntradas);
  var totalCompra = totalEntradas; //almacenar total de entradas $

  // Iterar sobre los combos seleccionados y agregar filas a la tabla
  combosSeleccionados.forEach(function (combo) {
    var filaCombo = $('<tr>');
    filaCombo.append($('<td>').text(combo.detalle));
    filaCombo.append($('<td>').text(formatearPrecio(combo.precio))); // Formatear combo.precio
    filaCombo.append(
      $('<td>').html(
        '<button class="btn btn-danger btn-sm eliminar-combo" data-id="' + combo.id + '">Eliminar</button>',
      ),
    );
    tablaBody.append(filaCombo);

    // Sumar el precio del combo al total de la compra
    totalCompra += parseFloat(combo.precio);
  });
  $('.text-center h4').text('Total: ' + formatearPrecio(totalCompra)); // Formatear totalCompra
}

// Botones de eliminar para tabla de compra
$(document).on('click', '.eliminar-combo', function () {
  var productoId = $(this).data('id');

  // Eliminar el producto del array
  combosSeleccionados = combosSeleccionados.filter(function (combo) {
    return combo.id !== productoId;
  });

  actualizarTablaCompra();
});

$(document).on('click', '.eliminar-entradas', function () {
  entradasSeleccionadas = 1; // Restablecer a 1 entrada por defecto
  $('#cantidadEntradas').val(1);
  actualizarTablaCompra();
});
function formatearPrecio(numero) {
  var num = parseFloat(numero).toFixed(2);
  var partes = num.split('.');
  partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return '$' + partes.join(',');
}
