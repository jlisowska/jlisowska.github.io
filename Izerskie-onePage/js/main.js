'use strict';
$(function(){
    
    let aboutPosition = $("#about").offset();
    
    $(window).scroll(function() {
        
        let winPosition = $(window).scrollTop();
        
        if(winPosition >= aboutPosition.top) {
            $('#main-nav').addClass('nav-col-scroll');
        } else {
            $('#main-nav').removeClass('nav-col-scroll');
        }           
    });

    let menuBtn = $('.menu-icon');
    let navItems = $('.nav-item');
    let menu = $('.menu');
    let mainNav = $('#main-nav');
    
     menuBtn.on('click', function(){
        menu.toggleClass('show');
        mainNav.toggleClass('nav-bg-col');
     });
    
    navItems.each(function(index, item){
        $(this).on('click', function(){
            menu.removeClass('show');
            mainNav.removeClass('nav-bg-col');
        });
    });
    
});

