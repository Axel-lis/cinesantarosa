$(document).ready(function () {
  //funcionalidad del navbar
  $('.navbar-toggler').click(function () {
    $('#navbarNav').toggleClass('show');
  });
});

$('.go-b').click(function () {
  $('html,body').animate(
    {
      scrollTop: $('#bottom').offset().top,
    },
    'slow',
  );
});
$('.go-t').click(function () {
  $('html,body').animate(
    {
      scrollTop: $('#top').offset().top,
    },
    'slow',
  );
});
