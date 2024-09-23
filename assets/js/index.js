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
    $('.calendar-cell.funcion').click(function () {
      window.location.href = './compra.php';
    });
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

    // Acceder a la grilla
    const grillaData = semana.grilla[Object.keys(semana.grilla)[0]];
    console.log('Datos de la grilla:', grillaData);

    for (let i = 0; i < diasem.length; i++) {
      let diaData = grillaData[i];
      let diaTitulo = semana.titulos[i];

      // Extraer el título del día del objeto
      let tituloMostrar = diaTitulo.titulo || diasem[i].charAt(0).toUpperCase() + diasem[i].slice(1);

      let grupo = $('<div class="day-group"></div>').appendTo(grilla);
      $(`<div class="calendar-day ${diasem[i]}">${tituloMostrar}</div>`).appendTo(grupo);

      // Verificar si hay funciones para el día
      if (diaData && Array.isArray(diaData) && diaData.length > 0) {
        diaData.forEach((funcion) => {
          if (funcion.agotadas) {
            // Si las entradas están agotadas
            $('<div class="calendar-cell empty-cell">Entradas agotadas</div>').appendTo(grupo);
          } else {
            // Crear un array con las etiquetas disponibles
            let etiquetas = [];
            if (funcion.shico1) etiquetas.push(funcion.shico1.toLowerCase());
            if (funcion.shico2) etiquetas.push(funcion.shico2.toLowerCase());

            let celda = $(`
              <div class="calendar-cell funcion">
                <div class="flex">
                  <span>${funcion.txtime || 'Horario no disponible'}</span> <br>
                  ${etiquetas
                    .map(
                      (etiqueta) =>
                        `<img src="./assets/img/etiquetas/etiqueta-${etiqueta}.png" class="etiquetas" alt="${etiqueta}">`,
                    )
                    .join('')}
                </div>
              </div>
            `).appendTo(grupo);

            celda.click(function () {
              window.location.href = './compra.php';
            });
          }
        });
      } else {
        // Si no hay funciones para el día o es un solo objeto
        if (diaData && !diaData.empty) {
          if (diaData.agotadas) {
            // Si las entradas están agotadas
            $('<div class="calendar-cell empty-cell">Entradas agotadas</div>').appendTo(grupo);
          } else {
            // Crear un array con las etiquetas disponibles
            let etiquetas = [];
            if (diaData.shico1) etiquetas.push(diaData.shico1.toLowerCase());
            if (diaData.shico2) etiquetas.push(diaData.shico2.toLowerCase());

            let celda = $(`
              <div class="calendar-cell funcion">
                <div class="flex">
                  <span>${diaData.txtime || 'Horario no disponible'}</span> <br>
                  ${etiquetas
                    .map(
                      (etiqueta) =>
                        `<img src="./assets/img/etiquetas/etiqueta-${etiqueta}.png" class="etiquetas" alt="${etiqueta}">`,
                    )
                    .join('')}
                </div>
              </div>
            `).appendTo(grupo);

            celda.click(function () {
              window.location.href = './compra.php';
            });
          }
        } else {
          // Si no hay datos o es un día vacío
          $('<div class="empty-cell"></div>').appendTo(grupo);
        }
      }
    }
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
