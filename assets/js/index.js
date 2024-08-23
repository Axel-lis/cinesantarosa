$(document).ready(function () {
  //funcionalidad del navbar
  $('.navbar-toggler').click(function () {
    $('#navbarNav').toggleClass('show');
  });
});

//abrir seccion de compra
$('.calendar-cell.funcion').click(function () {
  window.location.href = '/pages/compra.php';
});

$('.go-t').click(function () {
  $('html,body').animate(
    {
      scrollTop: $('#top').offset().top,
    },
    'slow',
  );
});
