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
  const untitulo = `<div class="col-sm-6 col-md-4 col-lg-2 mb-3">
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
// Función para decidir qué versión de renderSemanas utilizar
function renderSemanas(codigopelicula, semanas) {
  if (window.matchMedia('(min-width: 768px)').matches) {
    // Pantallas de escritorio
    renderSemanasDesktop(codigopelicula, semanas);
  } else {
    // Móviles y tabletas
    renderSemanasMobile(codigopelicula, semanas);
  }
}
function renderSemanasMobile(codigopelicula, semanas) {
  const diasem = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

  for (const [id, semana] of Object.entries(semanas)) {
    // Encabezado de la semana
    $('<div class="calendar-header"><p class="py-2">SEMANA DEL ' + semana.nombresemana + '</p></div>').appendTo(
      '#calendar' + codigopelicula,
    );

    const grilla = $('<div class="calendar-grid"></div>').appendTo('#calendar' + codigopelicula);

    // Objeto para rastrear las funciones por día
    const funcionesPorDia = {};

    // Llenamos el objeto funcionesPorDia
    for (const [clave, grillaData] of Object.entries(semana.grilla)) {
      for (let i = 0; i < diasem.length; i++) {
        let diaData = grillaData[i];
        if (diaData && Array.isArray(diaData)) {
          funcionesPorDia[diasem[i]] = funcionesPorDia[diasem[i]] || []; // Inicializa el array si no existe
          funcionesPorDia[diasem[i]].push(...diaData); // Agrega todas las funciones al array
        } else if (diaData && !diaData.empty) {
          funcionesPorDia[diasem[i]] = funcionesPorDia[diasem[i]] || [];
          funcionesPorDia[diasem[i]].push(diaData); // Agrega el objeto si es solo uno
        }
      }
    }

    // Renderizar los días con funciones
    for (const dia of diasem) {
      let grupo = $('<div class="day-group"></div>').appendTo(grilla);
      let diaElemento = $(`<div class="calendar-day ${dia}"></div>`).text(dia.charAt(0).toUpperCase() + dia.slice(1)); // Título del día
      grupo.append(diaElemento);

      let funcionesDia = $('<div class="funciones-dia"></div>');
      grupo.append(funcionesDia);

      if (funcionesPorDia[dia]) {
        funcionesPorDia[dia].forEach((funcion) => renderFuncion(funcion, funcionesDia));
      } else {
        $('<div class="empty-cell"></div>').appendTo(funcionesDia); // Día vacío
      }
    }
  }
}
function renderSemanasDesktop(codigopelicula, semanas) {
  const diasem = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

  for (const [id, semana] of Object.entries(semanas)) {
    $('<div class="calendar-header"><p class="py-2">SEMANA DEL ' + semana.nombresemana + '</p></div>').appendTo(
      '#calendar' + codigopelicula,
    );
    const grilla = $('<div class="calendar-grid"></div>').appendTo('#calendar' + codigopelicula);

    let diasRenderizados = {};

    for (const [clave, grillaData] of Object.entries(semana.grilla)) {
      for (let i = 0; i < diasem.length; i++) {
        let diaData = grillaData[i];
        let diaTitulo = semana.titulos[i];
        let tituloMostrar = diaTitulo.titulo || diasem[i].charAt(0).toUpperCase() + diasem[i].slice(1);

        if (!diasRenderizados[diasem[i]]) {
          diasRenderizados[diasem[i]] = true;
        } else {
          tituloMostrar = '';
        }

        let grupo = $('<div class="day-group"></div>').appendTo(grilla);
        let diaElemento = $(`<div class="calendar-day ${diasem[i]}">${tituloMostrar}</div>`);
        grupo.append(diaElemento);

        let funcionesDia = $('<div class="funciones-dia"></div>').appendTo(grupo);

        if (diaData && Array.isArray(diaData)) {
          diaData.forEach((funcion) => {
            renderFuncion(funcion, funcionesDia);
          });
        } else if (diaData && !diaData.empty) {
          renderFuncion(diaData, funcionesDia);
        } else {
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
    console.log(funcion);
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
