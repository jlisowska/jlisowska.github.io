//slider - pure java script
'use strict';
document.addEventListener('DOMContentLoaded', function(event) {
    
    var slideIndex = 0; //index of first slide

    var prevBtn = document.querySelector('.display-prev'); //to previous slide button
    var nextBtn = document.querySelector('.display-next'); //to next slide button
    var dots = document.querySelectorAll('.dots'); //dots at the bottom of the slider
    var slideTab = document.querySelectorAll('.slide'); //table with slides

    showSlide(slideIndex); //show first slide

    prevBtn.addEventListener('click', function(){ //change to the previous slide
                    changeSlide(-1);
    }); 
    nextBtn.addEventListener('click', function(){ //change to the next slide
                    changeSlide(1);
    });

    dots.forEach(function(item,index){
        item.addEventListener('click', function() { //show slide with the same index as single dot
            currentSlide(index); });             
    });

    function changeSlide(n) {
        showSlide(slideIndex+=n); //use 'showSlide' function with index, which corresponds to slideIndex + n
    }

    function currentSlide(n) { //show slide which corresponds to parameter n
      showSlide(slideIndex=n);
    }

    function showSlide(n) {
                
        if (n > slideTab.length-1) { //if n is grater than number of elements set slideIndex to first slide
            slideIndex = 0;
        } else if (n < 0) { //if n is lower than 0 set slideIndex to last slide
            slideIndex = slideTab.length-1;
        } 

        slideTab.forEach(function(item, index){
            item.classList.add('no'); //all slides have been set display: none
        });
      
        dots.forEach(function(item, index){
            item.classList.remove('white'); //all dots without white background
        });
        
        slideTab[slideIndex].classList.remove('no','slide-disp-start' ); //this one will be visible
        dots[slideIndex].classList.add('white'); // this dot will be white
    }
});