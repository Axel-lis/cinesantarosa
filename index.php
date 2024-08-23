<?php
include 'includes/header.php';
?>
<!--primera sección-->
<div class="container-fluid bg-purple">
    <div class="row py-3">
        <div class="col-4 d-flex flex-column justify-content-around align-items-center">
            <img src="./assets/img/sticker-ticket.png" alt="Ticket" class="small-icon mb-2">
            <img src="./assets/img/sticker-movie.png" alt="Movie" class="small-icon mb-2">
            <img src="./assets/img/sticker-popcorn.png" alt="Popcorn" class="small-icon">
        </div>
        <div class="col-4 d-flex justify-content-center align-items-center">
            <img src="./assets/img/logos/milenium-logo.png" alt="Milenium" class="main-logo img-fluid">
        </div>
        <div class="col-4 d-flex flex-column justify-content-around align-items-center">
            <img src="./assets/img/sticker-ticket.png" alt="Ticket" class="small-icon mb-2">
            <img src="./assets/img/sticker-movie.png" alt="Movie" class="small-icon mb-2">
            <img src="./assets/img/sticker-popcorn.png" alt="Popcorn" class="small-icon">
        </div>
    </div>

    <div class="row text-center text-white py-3 bg-dark">
        <div class="col-12">
            <h2 class="fw-bold"><i class="fas fa-film"></i> ESTA SEMANA EN CINES <i class="fas fa-film"></i></h2>
        </div>

        <div class="row justify-content-center pb-3">
            <div class="col-2">
                <!--imagenes dinámicas de las peliculas en cartelera-->
                <img src="./assets/img/ejemplo-movie.png" alt="Movie 1" class="img-fluid movie-poster">
            </div>
            <div class="col-2">
                <img src="./assets/img/ejemplo-movie.png" alt="Movie 2" class="img-fluid movie-poster">
            </div>
            <div class="col-2">
                <img src="./assets/img/ejemplo-movie.png" alt="Movie 3" class="img-fluid movie-poster">
            </div>
            <div class="col-2">
                <img src="./assets/img/ejemplo-movie.png" alt="Movie 4" class="img-fluid movie-poster">
            </div>
        </div>
    </div>
</div>
<!--segunda sección-->
<div class="container-fluid star-background">
    <div class="row text-white">
        <div class="col-md-9">
            <div class="schedule-section mt-5">
                <div class="row">
                    <div class="col-md-3">
                        <img src="./assets/img/ejemplo-movie.png" alt="Imagen 5">
                    </div>
                    <div class="col-md-9 iframe-container">
                        <iframe style="width:100%; height:100%;"
                            ng-src="https://www.youtube-nocookie.com/embed/nflDk6KmDpM" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" src="https://www.youtube-nocookie.com/embed/nflDk6KmDpM"></iframe>
                    </div>
                </div>
                <div class="calendar-container">
                    <div class="calendar-header">
                        <p>SEMANA DEL 01 AL 07 DE DICIEMBRE</p>
                    </div>
                    <div class="calendar-grid">
                        <!-- Agrupar días con sus funciones -->
                        <div class="day-group">
                            <div class="calendar-day lunes">Lunes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>16:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>22:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day martes">Martes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day miercoles">Miercoles</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day jueves">Jueves</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day viernes">Viernes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>10:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>16:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day sabado">Sábado</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>10:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day domingo">Domingo</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>10:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="schedule-section mt-5">
                <div class="row">
                    <div class="col-md-3">
                        <img src="./assets/img/ejemplo-movie.png" alt="Imagen 5">
                    </div>
                    <div class="col-md-9 iframe-container">
                        <iframe style="width:100%; height:100%;"
                            ng-src="https://www.youtube-nocookie.com/embed/nflDk6KmDpM" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" src="https://www.youtube-nocookie.com/embed/nflDk6KmDpM"></iframe>
                    </div>
                </div>
                <div class="calendar-container">
                    <div class="calendar-header">
                        <p>SEMANA DEL 01 AL 07 DE DICIEMBRE</p>
                    </div>
                    <div class="calendar-grid">
                        <!-- Agrupar días con sus funciones -->
                        <div class="day-group">
                            <div class="calendar-day lunes">Lunes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>16:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>22:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day martes">Martes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day miercoles">Miercoles</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day jueves">Jueves</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day viernes">Viernes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>10:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>16:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day sabado">Sábado</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day domingo">Domingo</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                    <span>20:00HS</span> <br>
                                    <img src="./assets/img/etiquetas/etiqueta-hd.png" class="etiquetas" alt="">
                                    <img src="./assets/img/etiquetas/etiqueta-subtitulado.png" class="etiquetas" alt="">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-3 sidebar">
            <img src="./assets/img/promos.png" alt="Imagen 1" class="img-fluid">
            <div class="mt-5 col-sm-6 col-md-6 col-lg-12 float-left">
                <div class="container newsletter">
                    <a href="./assets/contratos/contrato-menores.pdf" target="_blank" style="color:white;">DESCARGUE EL
                        FORMULARIO<br> MENORES RES. 2890</a>
                </div>
            </div>
            <div class="mt-5 col-sm-6 col-md-6 col-lg-12 d-none d-lg-block float-right">
                <div class="container newsletter">
                    <form
                        action="//cinesantarosa.us14.list-manage.com/subscribe/post?u=6e367e515cfec909f57abe5fd&amp;id=ac4082f719"
                        method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                        class="validate ng-pristine ng-valid" target="_blank" novalidate="">
                        <div id="mc_embed_signup_scroll">
                            <h2 class="letraVioleta">¡Suscribite a nuestro newsletter!</h2>
                            <div class="indicates-required"><span class="asterisk">*</span> requerido</div>
                            <br>
                            <div class="mc-field-group">
                                <label for="mce-EMAIL">Email <span class="asterisk">*</span>
                                </label>
                                <md-input-container class="md-block">
                                    <input type="email" value="" name="EMAIL" class="required email md-input"
                                        id="mce-EMAIL" aria-label="Email para subscripcion de newsletter">
                                    <div class="md-errors-spacer"></div>
                                </md-input-container>
                            </div>
                            <br>
                            <div class="mc-field-group">
                                <label for="mce-FNAME">Nombre </label>
                                <md-input-container class="md-block">
                                    <input type="text" value="" name="FNAME" class="md-input" id="mce-FNAME"
                                        aria-label="Nombre para subscripcion de newsletter">
                                    <div class="md-errors-spacer"></div>
                                </md-input-container>
                            </div>
                            <br>
                            <div class="mc-field-group">
                                <label for="mce-LNAME">Apellido </label>
                                <md-input-container class="md-block">
                                    <input type="text" value="" name="LNAME" class="md-input" id="mce-LNAME"
                                        aria-label="Apellido para subscripcion de newsletter">
                                    <div class="md-errors-spacer"></div>
                                </md-input-container>
                            </div>
                            <br>
                            <div class="mc-field-group size1of2">
                                <label for="mce-MMERGE3-month">Cumpleaños </label>
                                <div class="datefield">
                                    <span class="subfield dayfield"><input class="birthday " type="text"
                                            pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2"
                                            name="MMERGE3[day]" id="mce-MMERGE3-day"></span> /
                                    <span class="subfield monthfield"><input class="birthday " type="text"
                                            pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2"
                                            name="MMERGE3[month]" id="mce-MMERGE3-month"></span>
                                    <span class="small-meta nowrap">( dd / mm )</span>
                                </div>
                                <br>
                            </div>
                            <div id="mce-responses" class="clear">
                                <div class="response" id="mce-error-response" style="display:none"></div>
                                <div class="response" id="mce-success-response" style="display:none"></div>
                            </div>
                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                                    name="b_6e367e515cfec909f57abe5fd_ac4082f719" tabindex="-1" value=""></div>
                            <md-input-container class="md-block">
                                <button class="btn btn-info custom-btn">
                                    <i class="fas fa-info-circle"></i> Más Información
                                </button>

                            </md-input-container>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
    <div class="row map-container" id="map-container">
        <div class="col-md-12">
            <h2 class="fw-bold text-white bg-dark w-100 p-3"><i class="fas fa-film"></i> ¡NOS VEMOS EN EL CINE! <i
                    class="fas fa-film"></i></h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.140545203498!2d-64.29724732441785!3d-36.62300346692783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd0689920f4f%3A0xb4c0bd2ec262ec5f!2sCine%20Milenium!5e0!3m2!1ses-419!2sar!4v1724192095357!5m2!1ses-419!2sar"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</div>

<?php
include 'includes/footer.php';
?>