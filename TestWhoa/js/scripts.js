
$(document).ready(function(){

  $('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain();
   
  var scrollorama = $.scrollorama({
    blocks:'.curtains'
  });
    
    /*intro scripts*/
    scrollorama.animate('#intro h1',{
      duration:200, property:'left', end:-860
    });

    scrollorama.animate('#intro h2',{
      duration:300, property: 'right', end:-1600
    });
     
     /*contact scripts*/
     scrollorama.animate('#contact .linkedin img',{
      delay:1000, duration: 990, property:'left', start:-1000, end:0
    });

     scrollorama.animate('#contact .gmail img',{
      delay:1000, duration: 990, property:'bottom', start:-1000, end:0
    });

     scrollorama.animate('#contact .instagram img',{
      delay:1000, duration: 990, property:'top', start:-1000, end:0
    });

     scrollorama.animate('#contact .twitter img',{
      delay:1000, duration: 990, property:'bottom', start:-1000, end:0
    });

     scrollorama.animate('#contact .facebook img',{
      delay:1000, duration: 990, property:'right', start:-1000, end:0
    });

     /*Places scripts*/
     scrollorama.animate('#stuff .dosa img',{
      delay:300, duration:700, property:'left', start:-900, end:0

     });

     scrollorama.animate('#stuff .dj img',{
      delay:300, duration:700, property:'top', start:-900, end:0
     });

     scrollorama.animate('#stuff .fca img',{
      delay:300, duration:700, property:'top', start:-900, end:0
     });

     scrollorama.animate('#stuff .techchange img',{
      delay:300, duration:700, property:'right', start:-900, end:0
     });

     scrollorama.animate('#stuff .strongerph img',{
      delay:300, duration:700, property:'rotate', start:40, end:0
     });

     scrollorama.animate('#stuff .sagiving img',{
      delay:300, duration:700, property:'rotate', start:-40, end:00
     });

     /*March Scripts*/
     scrollorama.animate('#may_2014 .march_1 img',{
       duration: 990, property:'left', start:-1000, end:0
    });
});