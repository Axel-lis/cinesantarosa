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
            <h2 class="fw-bold"> ESTA SEMANA EN CINES </h2>
        </div>

        <div class="row justify-content-center pb-3" id="peliculasTitulos">
        </div>
    </div>
</div>
<!--segunda sección-->
<div class="container-fluid star-background">
    <div class="row text-white">
        <div class="col-md-1" id="aire"></div>
        <div class="col-md-7" id="schedules">
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
                        <p>SEMANA DEL xx AL xx DE xx</p>
                    </div>
                    <div class="calendar-grid">
                        <!-- Agrupar días con sus funciones -->
                        <div class="day-group">
                            <div class="calendar-day lunes">Lunes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day martes">Martes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day miercoles">Miercoles</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day jueves">Jueves</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day viernes">Viernes</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day sabado">Sábado</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                        <div class="day-group">
                            <div class="calendar-day domingo">Domingo</div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <div class="calendar-cell funcion">
                                <div class="flex">
                                </div>
                            </div>
                            <!-- Añade más celdas según sea necesario -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="schedule-section mt-5">
                <div class="row" style="display: flex;">
                    <div class="col-md-3" style="display: flex; align-items: center; min-height: 250px;">
                        <img src="./assets/img/ejemplo-movie.png" alt="Imagen 5" style="max-width: 100%; height: auto;">
                    </div>
                    <div class="col-md-9 iframe-container"
                        style="display: flex; align-items: stretch; min-height: 250px;">
                        <iframe style="width: 100%; height: 100%; min-height: 250px;"
                            ng-src="https://www.youtube-nocookie.com/embed/nflDk6KmDpM" frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" src="https://www.youtube-nocookie.com/embed/nflDk6KmDpM"></iframe>
                    </div>
                </div>
            </div>
            <div class="calendar-container">
                <div class="calendar-header">
                    <p>SEMANA DEL xxx AL xx DE xxx</p>
                </div>
                <div class="calendar-grid">
                    <!-- Agrupar días con sus funciones -->
                    <div class="day-group">
                        <div class="calendar-day lunes">Lunes</div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <!-- Añade más celdas según sea necesario -->
                    </div>
                    <div class="day-group">
                        <div class="calendar-day martes">Martes</div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <!-- Añade más celdas según sea necesario -->
                    </div>
                    <div class="day-group">
                        <div class="calendar-day miercoles">Miercoles</div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <!-- Añade más celdas según sea necesario -->
                    </div>
                    <div class="day-group">
                        <div class="calendar-day jueves">Jueves</div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <!-- Añade más celdas según sea necesario -->
                    </div>
                    <div class="day-group">
                        <div class="calendar-day viernes">Viernes</div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <!-- Añade más celdas según sea necesario -->
                    </div>
                    <div class="day-group">
                        <div class="calendar-day sabado">Sábado</div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <!-- Añade más celdas según sea necesario -->
                    </div>
                    <div class="day-group">
                        <div class="calendar-day domingo">Domingo</div>
                        <div class="calendar-cell funcion">
                            <div class="flex">
                            </div>
                        </div>
                        <!-- Añade más celdas según sea necesario -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-3 sidebar mt-5">
        <img src="./assets/img/promos.png" alt="Imagen 1" class="img-fluid">
        <div class="mt-5 col-sm-6 col-md-6 col-lg-12 float-left">
            <div class="container newsletter">
                <a href="./assets/contratos/contrato-menores.pdf" target="_blank" style="color:white;">DESCARGUE EL
                    FORMULARIO<br> MENORES RES. 2890</a>
            </div>
        </div>

    </div>
</div>
<div class="row map-container" id="map-container">
    <div class="col-12">
        <h2 class="fw-bold text-white bg-dark w-100 p-3">
            ¡NOS VEMOS EN EL CINE!
        </h2>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3202.140545203498!2d-64.29724732441785!3d-36.62300346692783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95c2cd0689920f4f%3A0xb4c0bd2ec262ec5f!2sCine%20Milenium!5e0!3m2!1ses-419!2sar!4v1724192095357!5m2!1ses-419!2sar"
            width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>

</div>

<?php
include 'includes/footer.php';
?>