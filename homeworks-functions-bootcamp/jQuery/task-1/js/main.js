$(function(){
   
    var animationBtn = $('#animation-btn');
    var square = $('#square');
    
    animationBtn.on({
        'click' : function(){
            square.animate({
                'left' : '150px',
                'height' : '100px',
                'width' : '100px'
                }, 3000, function(){
                    square.css({backgroundColor: 'blue',transition: 'background-color 5s' });
                    $('#square h2').css({opacity: '1', transition: 'opacity', transitionDelay: '5s'});
                });
            }
        });
    
});