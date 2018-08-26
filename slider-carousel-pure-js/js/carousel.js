//carousel pure java script
'use strict';
document.addEventListener('DOMContentLoaded', function(event) {
    
    var slideIndex = 0;

    carousel ();

    function carousel() {
        var slideTable = document.querySelectorAll('.slide');
        
        slideTable.forEach(function(item, index){
            item.classList.add('no');
        });

        if( slideIndex > slideTable.length -1) {slideIndex = 0; }
    
        slideTable[slideIndex].classList.remove('no', 'slide-disp-start');
    
        slideIndex++;
    
        setTimeout(carousel, 2000);
    }
    
});