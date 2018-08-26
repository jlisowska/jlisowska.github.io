$(function(){
    
    var sumBtn = $('#count-sum');
    var sum = $('#sum');
    
    sumBtn.on({
        'click' : function(){
            
            var salary = $('.salary');
            var totalSum = 0;
           
            salary.each(function() {
                totalSum += parseInt($(this).text());
            });
            
            sum.text(totalSum);
        }
    });
});