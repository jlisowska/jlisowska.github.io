$(function(){
    
    var last2FirstBtn = $('#last2first-btn');
    var first2LastBtn = $('#first2last-btn');
        
    
    last2FirstBtn.on({
        'click' : function(){
            var lastParagraph = $("p:last-of-type");
            var firstParagraph = $("p:first-of-type");
            lastParagraph.insertBefore(firstParagraph);
        }
    });
    
    first2LastBtn.on({
        'click' : function(){
            var lastParagraph = $("p:last-of-type");
            var firstParagraph = $("p:first-of-type");
            firstParagraph.insertAfter(lastParagraph);
        }
    });
    
});

