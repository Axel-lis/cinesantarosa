$(document).ready(function () {
  getProducts();
});
// botones agregar
$(document).on('click', '.buttonAgregar', function () {
  var productoId = $(this).data('id');
  // Lógica para manejar la selección del producto
  alert('Producto ' + productoId + ' agregado al carrito!');
});
// Obtener el valor del parámetro 'id' desde la URL
function getMovieIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id'); // Devuelve el ID de la película o null si no existe
}

// Traer productos desde la API usando el ID de la película
function getProducts() {
  const idPelicula = getMovieIdFromURL(); // Extraer el ID desde la URL
  console.log('ID de la película:', idPelicula); // Verificar si el ID se obtiene correctamente

  if (!idPelicula) {
    console.error('ID de película no definido en la URL.');
    return; // Evitar la llamada AJAX si no hay ID
  }

  $.ajax({
    url: `https://www.cinesantarosa.com.ar/api/ws/ventashow/${idPelicula}`,
    method: 'GET',
    success: function (response) {
      const data = response.show;

      if (data && data.combos) {
        $('#productos-container').empty(); // Limpiar el contenedor

        // Filtrar los combos activos
        const productosHabilitados = data.combos.filter((combo) => combo.cbactive === '1');

        // Iterar sobre los combos y generar el HTML
        $.each(productosHabilitados, function (index, combo) {
          const imgUrl = `https://www.cinesantarosa.com.ar/assets/img/combos/${combo.id}/${
            combo.id
          }.png?v=${Math.random()}`;

          const productoHtml = `
            <div class="col-6 col-md-3 p-3">
              <div class="producto">
                <img src="${imgUrl}" alt="${combo.observacion}" class="img-fluid">
                <p>${combo.detalle}</p>
                <p><strong>Precio:</strong> $${parseFloat(combo.precio).toLocaleString('es-AR')}</p>
              </div>
              <button class="buttonAgregar" data-id="${combo.id}">Agregar</button>
            </div>
          `;

          // Agregar el producto al contenedor
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
