$(window).scroll(function(){

  var scroll = $(window).scrollTop();

  if (scroll > 0 ) {
    $('div.header').addClass('scrolled');
  }

  if (scroll <= 0 ) {
    $('div.header').removeClass('scrolled');
 }

});