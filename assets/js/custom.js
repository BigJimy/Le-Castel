/* Add auto-padding to Header */
$(document).ready(function() {
    
    'user strict';
    
    setInterval( function() {
        
        'user strict';
        
        var windowHeight = $(window).height();
        var containerHeight = $(".header-container").height();
        var padTop = windowHeight - containerHeight;
        
        $(".header-container").css({
            
            'padding-top': Math.round( padTop / 2) + 'px',
            'padding-bottom': Math.round( padTop / 2) + 'px'
        });
    }, 10)
      
});

/* Add BX Slider to Screens */
$(document).ready(function() {
    
    $('.bxslider').bxSlider({
        
        slideWidth: 292.5,
        auto: true,
        minSlides: 1,
        maxSlides: 3,
        slideMargin: 50
    
    });
    
});



/* Show and hide menu */

$(document).ready(function(){
    
    'use strict';
    
    $(window).scroll(function() {
        'use strict'; 
        
        if($(window).scrollTop() < 10 ) {
            
            $('.navbar').css({
                'margin-top': '-100px',
                'opacity': '0'
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba( 0, 0, 0, 0)'
            });
            
        } else {
    
            $('.navbar').css({
                'margin-top': '0px',
                'opacity': '1'
            });
            
            $('.navbar-default').css({
                'background-color': 'rgba(0, 0, 0, 0.8)',
                'border-color': '#444'
            });
            
            $('.navbar-brand img').css({
//                'height': '35px',
                'padding-top': 'Opx'
                
            });
            
            $('.navbar-nav > li > a').css({
                'padding-top': '15px'
                
            });
        }
        
    });
    
});