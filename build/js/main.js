$(function(){
  // Default: Não randomico, 5 segundos e todos os filhos de Paxaslider;
  $('.banner').paxaSlider({
    seconds:3,
    random:true,
    bullet: 'tabs'
  });

  $('.banner2').paxaSlider({
    seconds:6,
    random:false
  });

});