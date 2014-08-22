$(function(){
  // Default: Não randomico, 5 segundos e todos os filhos de Paxaslider;
  $('.banner').paxaSlider({
    seconds: 3,
    random: true,
    bullet: 'tabs',
    contrary: true
  });

  $('.banner2').paxaSlider({
    son: $('.banner2 a'),
    seconds: 6,
    random: false,
    navigation: {
      left  : '.leftArrow',
      right : '.rightArrow'
    }
  });

});