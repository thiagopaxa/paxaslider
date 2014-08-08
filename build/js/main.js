$(function(){
  // Default: Não randomico, 5 segundos e todos os filhos de Paxaslider;
  $('.banner').paxaSlider({
    seconds:3,
    random:true,
    bullet: 'labels'
  });

  $('.banner2').paxaSlider({
    seconds:6,
    random:false
  });

});