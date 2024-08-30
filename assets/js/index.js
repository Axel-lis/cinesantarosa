var peliculas = TAFFY();
peliculas.settings({ onUpdate: function () { insertUpdatePeliculas(this) }, onInsert: function () { insertUpdatePeliculas(this); } });


$(document).ready(function () {
	//funcionalidad del navbar
	$('.navbar-toggler').click(function () {
		$('#navbarNav').toggleClass('show');
	});
	const {host, hostname, href, origin, pathname, port, protocol, search} = window.location;
	if (pathname.includes("compra")) {
		getProducts();
	} else {
		getSemana();
		$('.calendar-cell.funcion').click(function () {
			window.location.href = './compra.php';
		});
	}
});

function insertUpdatePeliculas(que) {

}

function getSemana() {
	$.ajax({
		url: 'https://www.cinesantarosa.com.ar/api/ws/semana',
		method: 'GET',
		success: function (response) {
			for (const [titulo, peli] of Object.entries(response.pelisxcine)) {
				peliculas.insert({mvtitle:peli.mvtitle, mvcat1: peli.mvcat1, mvcat2: peli.mvcat2, mvimg: peli.mvimg, mvtube: peli.mvtube});
			};
			renderTitulos();
			renderPeliculas();
			for (const [titulo, peli] of Object.entries(response.pelisxcine)) {
				renderSemanas(peli.mvtube, peli.semanas);
			}
		}});
}

function renderTitulos() {
	const untitulo=`<div class="col-2">
		<a href="#{mvtitle}">
			<img src="https://www.cinesantarosa.com.ar/assets/img/peliculas/{mvimg}" class="img-fluid movie-poster" alt="{mvtitle}">
		</a>
	</div>`;
	$('#peliculasTitulos').html(peliculas().supplant(untitulo));
}

function renderPeliculas() {
	const unaPeli=`
	<div class="nuevaMovie" id="{mvtitle}"></div>
	<div class="schedule-section mt-5" >
		<div class="row">
			<div class="col-11"><h2>{mvtitle}</h2></div>
			<div class="col-1"><img src="https://www.cinesantarosa.com.ar/assets/img/categorias/{mvcat1}" class="img-fluid"></div>
			<div class="col-md-3">
					<img src="https://www.cinesantarosa.com.ar/assets/img/peliculas/{mvimg}" alt="{mvtitle}">
			</div>
			<div class="col-md-9 iframe-container">
				<iframe style="width:100%; height:100%;"
						ng-src="https://www.youtube-nocookie.com/embed/{mvtube}" frameborder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen="" src="https://www.youtube-nocookie.com/embed/{mvtube}"></iframe>
			</div>
		</div>
		<div class="calendar-container" id="calendar{mvtube}">
		</div>
	</div>
	`;
	$('#schedules').html(peliculas().supplant(unaPeli));
}

function renderSemanas(codigopelicula, semanas) {
	const diasem=['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];
	for (const [id, semana] of Object.entries(semanas)) {
		$('<div class="calendar-header"><p>SEMANA DEL ' + semana.nombresemana + '</p></div>').appendTo('#calendar' + codigopelicula);
		const grilla = $('<div class="calendar-grid"></div>').appendTo('#calendar' + codigopelicula);
		i=0;
		for (const [tituloid, dia] of Object.entries(semana.titulos)) {
			let grupo=$('<div class="day-group"></div>').appendTo(grilla);
			let estedia=$(`<div class="calendar-day ${diasem[i++]}">${dia.titulo}</div>`).appendTo(grupo);
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
