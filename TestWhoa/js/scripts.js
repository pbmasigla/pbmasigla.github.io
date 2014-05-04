
$(document).ready(function(){

  $('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
  var scrollorama = $.scrollorama({
    blocks:'.curtains'
  });
    
    /*intro scripts*/
    scrollorama.animate('.may_1',{
      duration:200, property:'right', end:-3100
    });

    scrollorama.animate('.may_2',{
      duration:200, property: 'left', end: -860
    });

    scrollorama.animate('.april_1',{
      delay:650, duration:200, property:'left', start:150, end:-100
    });

    scrollorama.animate('.april_2',{
      delay:650, duration:200, property:'left', start:100, end:-70
    });

    scrollorama.animate('.april_3',{
      delay:650, duration:200, property:'top', start:100, end:-70
    });

    scrollorama.animate('.april_4',{
      delay:650, duration:200, property:'right', start:100, end:-20
    });
    scrollorama.animate('.april_5',{
      delay:600, duration:200, property:'left', start:800, end:950
    });

    scrollorama.animate('.march_1',{
      delay:1300, duration:200, property:'left', start:170, end:-70
    });
    scrollorama.animate('.march_2',{
      delay:1300, duration:200, property:'right', start:100, end:-20
    });
});