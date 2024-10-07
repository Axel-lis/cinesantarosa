var peliculas = TAFFY();
peliculas.settings({
  onUpdate: function () {
    insertUpdatePeliculas(this);
  },
  onInsert: function () {
    insertUpdatePeliculas(this);
  },
});

$(document).ready(function () {
  //funcionalidad del navbar
  $('.navbar-toggler').click(function () {
    $('#navbarNav').toggleClass('show');
  });
  const { host, hostname, href, origin, pathname, port, protocol, search } = window.location;
  if (pathname.includes('compra')) {
    getProducts();
  } else {
    getSemana();
  }
});

function insertUpdatePeliculas(que) {}

function getSemana() {
  $.ajax({
    url: 'https://www.cinesantarosa.com.ar/api/ws/semana',
    method: 'GET',
    success: function (response) {
      for (const [titulo, peli] of Object.entries(response.pelisxcine)) {
        peliculas.insert({
          mvtitle: peli.mvtitle,
          mvcat1: peli.mvcat1,
          mvcat2: peli.mvcat2,
          mvimg: peli.mvimg,
          mvtube: peli.mvtube,
        });
      }
      renderTitulos();
      renderPeliculas();
      for (const [titulo, peli] of Object.entries(response.pelisxcine)) {
        renderSemanas(peli.mvtube, peli.semanas);
      }
    },
  });
}
function renderTitulos() {
  const untitulo = `<div class="col-2">
		<a href="#{mvtitle}">
			<img src="https://www.cinesantarosa.com.ar/assets/img/peliculas/{mvimg}" class="img-fluid movie-poster" alt="{mvtitle}">
		</a>
	</div>`;
  $('#peliculasTitulos').html(peliculas().supplant(untitulo));
}

function renderPeliculas() {
  const unaPeli = `
	<div class="nuevaMovie" id="{mvtitle}">
		<div class="schedule-section mt-5" >
			<div class="custom-row row">
				<div class="col-11 py-4"><h2>{mvtitle}</h2></div>
				<div class="col-1"><img src="https://www.cinesantarosa.com.ar/assets/img/categorias/{mvcat1}" class="img-fluid"></div>
				<div class="col-md-4">
					<img src="https://www.cinesantarosa.com.ar/assets/img/peliculas/{mvimg}" alt="{mvtitle}" class="img-cartelera">
				</div>
				<div class="col-md-8 iframe-container">
					<iframe style="width:100%; height:100%; max-height: 250px;"
							ng-src="https://www.youtube-nocookie.com/embed/{mvtube}" frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen="" src="https://www.youtube-nocookie.com/embed/{mvtube}"></iframe>
				</div>
			</div>
			<div class="calendar-container" id="calendar{mvtube}">
			</div>
		</div>
	</div>
  `;
  $('#schedules').html(peliculas().supplant(unaPeli));
}

function renderSemanas(codigopelicula, semanas) {
  const diasem = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

  for (const [id, semana] of Object.entries(semanas)) {
    $('<div class="calendar-header"><p class="py-2">SEMANA DEL ' + semana.nombresemana + '</p></div>').appendTo(
      '#calendar' + codigopelicula,
    );
    const grilla = $('<div class="calendar-grid"></div>').appendTo('#calendar' + codigopelicula);

    // Objeto para rastrear los días ya renderizados
    let diasRenderizados = {};

    // Recorrer todas las propiedades de semana.grilla
    for (const [clave, grillaData] of Object.entries(semana.grilla)) {
      for (let i = 0; i < diasem.length; i++) {
        let diaData = grillaData[i];
        let diaTitulo = semana.titulos[i];

        // Extraer el título del día
        let tituloMostrar = diaTitulo.titulo || diasem[i].charAt(0).toUpperCase() + diasem[i].slice(1);

        // Verificar si el día ya ha sido renderizado
        if (!diasRenderizados[diasem[i]]) {
          // Si no ha sido renderizado, lo añadimos y mostramos el título
          diasRenderizados[diasem[i]] = true;
        } else {
          // Si ya ha sido renderizado, dejar el título vacío
          tituloMostrar = '';
        }

        let grupo = $('<div class="day-group"></div>').appendTo(grilla);
        let diaElemento = $(`<div class="calendar-day ${diasem[i]}">${tituloMostrar}</div>`);
        grupo.append(diaElemento);

        // Crear un contenedor para las funciones del día
        let funcionesDia = $('<div class="funciones-dia"></div>').appendTo(grupo);

        // Verificar si hay funciones para el día
        if (diaData && Array.isArray(diaData)) {
          // Aquí iteramos sobre cada función del día
          diaData.forEach((funcion) => {
            renderFuncion(funcion, funcionesDia);
          });
        } else if (diaData && !diaData.empty) {
          // Si es un solo objeto (no array), renderizar la única función del día
          renderFuncion(diaData, funcionesDia);
        } else {
          // Día vacío
          $('<div class="empty-cell"></div>').appendTo(funcionesDia);
        }
      }
    }
  }
}

function renderFuncion(funcion, grupo) {
  let idPelicula = funcion.shid;
  if (funcion.agotadas) {
    // Entradas agotadas
    $('<div class="calendar-cell empty-cell">Entradas agotadas</div>').appendTo(grupo);
  } else {
    // Crear array con las etiquetas
    let etiquetas = [];
    if (funcion.shico1) etiquetas.push(funcion.shico1.toLowerCase());
    if (funcion.shico2) etiquetas.push(funcion.shico2.toLowerCase());

    let celda = $(`
      <div class="calendar-cell funcion" data-id="${idPelicula}">
        <div class="flex">
          <span>${funcion.txtime || 'Horario no disponible'}</span><br>
          ${etiquetas
            .map(
              (etiqueta) =>
                `<img src="./assets/img/etiquetas/etiqueta-${etiqueta}.png" class="etiquetas" alt="${etiqueta}">`,
            )
            .join('')}
        </div>
      </div>
    `).appendTo(grupo);

    // Evento click para redireccionar
    celda.click(function () {
      window.location.href = './compra.php?id=' + idPelicula;
    });
  }
}

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
