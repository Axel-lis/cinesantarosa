<?php include __DIR__ . '/includes/header.php'; ?>
<main class="bg-morePurple pb-5">
    <!-- Banner -->
    <div class="banner">
        <img src="./assets/img/COMPRA_Banner web.png" alt="Cine Millenium" class="banner-web">
        <img src="./assets/img/COMPRA_Banner movil.png" alt="Cine Millenium" class="banner-movil">
    </div>
    <!-- Proceso de Compra -->
    <div class="container container-section-compra">
        <div class="proceso-compra">
            <h2 class="fw-bolder my-5">PROCESO DE COMPRA</h2>
            <img src="./assets/img/sticker-popcorn.png" alt="Popcorn" class="small-icon my-5">
        </div>

        <!-- Productos -->
        <div class="row text-center" id="productos-container">

        </div>

        <!-- Imagen Compra -->
        <div class="proceso-compra mt-5">
            <img src="./assets/img/sticker-ticket.png" alt="Ticket" class="small-icon-3 my-5">
        </div>
        <!-- Ticket Compra -->
        <div class="row">
            <img src="./assets/img/COMPRA_Ticket-web.png" alt="Cine Millenium" class="img-fluid ticket-web">
            <img src="./assets/img/COMPRA_Ticket-Movil.png" alt="Cine Millenium" class="img-fluid ticket-movil">
        </div>
        <br>
        <br>
        <br>
        <!-- Detalle de Compra -->
        <div class="row my-5">
            <div class="col-md-5 cantidad-entradas-container">
                <div class="mb-3">
                    <label for="cantidadEntradas" class="form-label mt-3 h3">Cantidad de
                        Entradas</label>
                    <select class="form-select" id="cantidadEntradas">
                        <option>1 entrada</option>
                        <option>2 entradas</option>
                        <option>3 entradas</option>
                        <option>4 entradas</option>
                    </select>
                </div>
            </div>
            <div class="col-md-6 datos-personales-container">
                <div class="mb-3">
                    <label for="nombre" class="form-label mt-3 h3">Datos Personales</label>
                    <div class="row">
                        <div class="col-6">
                            <input type="text" class="form-control" id="nombre" placeholder="Nombre">
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" id="apellido" placeholder="Apellido">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-6">
                            <input type="email" class="form-control" id="email" placeholder="E-mail">
                        </div>
                        <div class="col-6">
                            <input type="text" class="form-control" id="whatsapp" placeholder="Whatsapp">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br><br><br>
        <!-- Detalle de Compra -->
        <div class="detalle-compra mt-5">
            <h3 class="text-white text-center fw-bolder my-5">DETALLE DE COMPRA</h3>
            <div class="proceso-compra my-5">
                <img src="./assets/img/sticker-movie.png" alt="Movie" class="small-icon-2 mb-4">
            </div>

            <table class="table">
                <thead>
                    <tr>
                        <th>Detalle</th>
                        <th>Precio</th>
                        <th>Opción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cargo por servicio</td>
                        <td>$577.50</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1 x Entrada de KUNG FU PANDA 4</td>
                        <td>$1,900.00</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1 x Lays Clásicas 46g</td>
                        <td>$1,400.00</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center w-100" style="background-color: #fff; padding: 10px; margin-top:-15px;">
                <h4 class="text-secondary">TOTAL: $3.877,50</h4>
                <button class="btn btn-secondary">PREPARAR PAGO</button>
            </div>
        </div>
    </div>
</main>
<?php include __DIR__ . '/includes/footer.php'; ?>