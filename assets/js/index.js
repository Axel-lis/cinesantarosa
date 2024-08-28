$(document).ready(function () {
  //funcionalidad del navbar
  $('.navbar-toggler').click(function () {
    $('#navbarNav').toggleClass('show');
  });
  //muestra los productos en sección compra
  getProducts();
});

//abrir seccion de compra
$('.calendar-cell.funcion').click(function () {
  window.location.href = './compra.php';
});

//traer los productos desde la API
function getProducts() {
  $.ajax({
    url: 'https://www.cinesantarosa.com.ar/api/ws/ventashow/2937',
    method: 'GET',
    success: function (response) {
      // Convierte la respuesta JSON en un objeto
      var data = response.show;

      // Define los IDs de productos que deseas mostrar
      var idsProductosMostrar = ['45', '4', '6', '48', '51', '50', '24', '26', '52', '47', '61', '62', '59', '60'];

      // Itera sobre el arreglo 'combos' y filtra los productos
      $.each(data.combos, function (index, combo) {
        if (idsProductosMostrar.includes(combo.id)) {
          // Construye la URL de la imagen
          var imgUrl = 'https://www.cinesantarosa.com.ar/assets/img/combos/' + combo.id + '/' + combo.id + '.png';

          // Crea el HTML para el producto
          var productoHtml = `
                        <div class="col-6 col-md-3 p-3">
                            <div class="producto">
                                <img src="${imgUrl}" alt="${combo.detalle}" class="img-fluid">
                            </div>
                            <p class="texto-producto">${combo.observacion}</p>
                            <button class="buttonAgregar" data-id="${combo.id}">Agregar</button>
                        </div>
                    `;

          // Agrega el HTML del producto al container
          $('#productos-container').append(productoHtml);
        }
      });

      // Configura el evento de click para el btn agregar
      $('.buttonAgregar').click(function () {
        var productoId = $(this).data('id');
        // Aquí puedes agregar la lógica para manejar la selección del producto
        alert('Producto ' + productoId + ' agregado al carrito!');
      });
    },
    error: function (error) {
      console.error('Error al obtener los datos:', error);
    },
  });
}

//boton de ir arriba
$('.go-t').click(function () {
  $('html,body').animate(
    {
      scrollTop: $('#top').offset().top,
    },
    'slow',
  );
});
