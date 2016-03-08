
$(document).ready(function(){

  $('.curtains>li').css('position', 'fixed');

   $('.curtains').curtain({
        curtainLinks: '.curtain-links'
    });
   
  var scrollorama = $.scrollorama({
    blocks:'.curtains'
  });

    /*May 2014 Scripts*/
    scrollorama.animate('.may_2014_house',{
      duration:600, property:'bottom', start:290, end:-300
    });

    /*April Scripts*/
    scrollorama.animate('.april_1',{
      delay:890, duration:200, property:'left', start:150, end:-100
    });

    scrollorama.animate('.april_2',{
      delay:890, duration:200, property:'left', start:100, end:-70
    });

    scrollorama.animate('.april_3',{
      delay:890, duration:200, property:'top', start:100, end:-70
    });

    scrollorama.animate('.april_4',{
      delay:890, duration:200, property:'right', start:100, end:-20
    });
    scrollorama.animate('.april_5',{
      delay:840, duration:200, property:'left', start:800, end:950
    });


    /*March Scripts*/
    scrollorama.animate('.march_1',{
      delay:1840, duration:200, property:'left', start:170, end:-70
    });
    scrollorama.animate('.march_2',{
      delay:1840, duration:200, property:'right', start:100, end:-20
    });
   
    /*February Scripts*/
    scrollorama.animate('.february_1',{
      delay:2820, duration:200, property:'left', start:40, end:-70
    });
    scrollorama.animate('.february_2',{
      delay:2845, duration:200, property:'left', start:40, end:-70
    });
    scrollorama.animate('.february_3',{
      delay:2720, duration:200, property:'top', start:50, end:-30
    });
    scrollorama.animate('.february_4',{
      delay:2720, duration:200, property:'left', start:500, end:-29
    });
    scrollorama.animate('.february_5',{
      delay:2720, duration:200, property:'top', start:50, end:-20
    });
    scrollorama.animate('.february_6',{
      delay:2720, duration:200, property:'left', start:700, end:600
    });
    scrollorama.animate('.february_7',{
      delay:2720, duration:200, property:'top', start:30, end:-10
    });
    scrollorama.animate('.february_8',{
      delay:2720, duration:200, property:'left', start:900, end:1100
    });
    scrollorama.animate('.february_9',{
      delay:2720, duration:200, property:'right', start:100, end:-30
    });
    scrollorama.animate('.february_10',{
      delay:2720, duration:200, property:'top', start:900, end:-40
    });

    /*January Scripts*/
    scrollorama.animate('.january_1',{
      delay:3720, duration:200, property:'top', end:-70
    });
    scrollorama.animate('.january_2',{
      delay:3720, duration:200, property:'right', start:300, end: -200
    });
    scrollorama.animate('.january_3',{
      delay:3720, duration:200, property:'left', start:1295, end: -10
    });
    scrollorama.animate('.january_4',{
      delay:3750, duration:200, property:'top', end: -10
    });
    scrollorama.animate('.january_5',{
      delay:3720, duration:200, property:'right', start:200, end:-800
    });
    scrollorama.animate('.january_6',{
      delay:3720, duration:200, property:'left', start:1195, end:-200
    });
    scrollorama.animate('.january_7',{
      delay:3720, duration:200, property:'top', start:600, end:-40
    });

    /*December Scripts*/
     scrollorama.animate('.december_1',{
      delay:4720, duration:200, property:'left', end:-70
    });
    scrollorama.animate('.december_2',{
      delay:4720, duration:200, property:'top',  end: -200
    });
    scrollorama.animate('.december_3',{
      delay:4720, duration:200, property: 'top',  end: -200
    });
    scrollorama.animate('.december_4',{
      delay:4720, duration:200, property:'right', end: -70
    });

    /*November Scripts*/
     scrollorama.animate('.november_1',{
      delay:5600, duration:200, property:'top', end:-70
    });
    scrollorama.animate('.november_2',{
      delay:5600, duration:200, property:'left', start:300, end:-10
    });
    scrollorama.animate('.november_3',{
      delay:5600, duration:200, property: 'left',  start:50, end:-20
    });
    scrollorama.animate('.november_4',{
      delay:5600, duration:200, property:'right', start:970, end:0
    });
    scrollorama.animate('.november_5',{
      delay:5600, duration:200, property:'bottom', start:450, end:-300
    });

    /*October Scripts*/
     scrollorama.animate('.october_1',{
      delay:6600, duration:200, property:'left', start:180, end:-70
    });
    scrollorama.animate('.october_2',{
      delay:6600, duration:200, property:'top', start:20, end:-90
    });
    scrollorama.animate('.october_3',{
      delay:6600, duration:200, property: 'bottom',  start:670, end:-300
    });
    scrollorama.animate('.october_4',{
      delay:6600, duration:200, property:'right', start:140, end:-200
    });

    /*September Scripts*/
     scrollorama.animate('.september_1',{
      delay:7600, duration:200, property:'top', start:30, end:-120
    });
    scrollorama.animate('.september_2',{
      delay:7600, duration:200, property:'left', start:150, end:-120
    });
    scrollorama.animate('.september_3',{
      delay:7600, duration:200, property: 'bottom',  start:270, end:-300
    });

     /*August Scripts*/
     scrollorama.animate('.august_1',{
      delay:8600, duration:200, property:'bottom', start:290, end:-300
    });
    scrollorama.animate('.august_2',{
      delay:8600, duration:200, property:'top', start:410, end:-10
    });
    scrollorama.animate('.august_3',{
      delay:8600, duration:200, property: 'top',  start:410, end:-10
    });
    scrollorama.animate('.august_4',{
      delay:8600, duration:200, property:'left', start:340, end:-100
    });
    scrollorama.animate('.august_5',{
      delay:8600, duration:200, property:'right', start:80, end:-200
    });

    /*July Scripts*/
     scrollorama.animate('.july_1',{
      delay:9400, duration:200, property:'right', start:1000, end:-70
    });
    scrollorama.animate('.july_2',{
      delay:9400, duration:200, property:'left', start:1000, end:-90
    });
    scrollorama.animate('.july_3',{
      delay:9400, duration:200, property: 'top',  start:420, end:-300
    });
    scrollorama.animate('.july_4',{
      delay:9400, duration:200, property:'top', start:420, end:-300
    });

    /*June Scripts*/
    scrollorama.animate('.june_1',{
      delay:10400, duration:200, property:'left', start:40, end:-70
    });
    scrollorama.animate('.june_2',{
      delay:10400, duration:200, property:'right', start:1000, end:-70
    });
    // scrollorama.animate('.june_3',{
    //   delay:10400, duration:200, property:'top', start:50, end:-30
    // });
    scrollorama.animate('.june_4',{
      delay:10400, duration:200, property:'left', start:30, end:-100
    });
    // scrollorama.animate('.june_5',{
    //   delay:10400, duration:200, property:'top', start:50, end:-20
    // });
    scrollorama.animate('.june_6',{
      delay:10400, duration:200, property:'left', start:960, end:-10
    });
    scrollorama.animate('.june_7',{
      delay:10400, duration:200, property:'top', start:230, end:-10
    });
    scrollorama.animate('.june_8',{
      delay:10400, duration:200, property:'bottom', start:250, end:-300
    });
    // scrollorama.animate('.june_9',{
    //   delay:10400, duration:200, property:'right', start:100, end:-30
    // });

    // /*May 2013 Scripts*/
    // scrollorama.animate('.may_1',{
    //   delay:11400, duration:200, property:'right', start:1000, end:-70
    // });
    // scrollorama.animate('.may_2',{
    //   delay:11400, duration:200, property:'left', start:1000, end:-90
    // });
    // scrollorama.animate('.may_3',{
    //   delay:11400, duration:200, property: 'top',  start:420, end:-300
    // });
});