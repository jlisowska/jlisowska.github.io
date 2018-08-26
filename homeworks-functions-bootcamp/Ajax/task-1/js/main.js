'use strict';
$(function(){
    
    function getData(url) {
        
        $.getJSON(url, function(data) {
            let devData = [];
            $.each(data,function(key,val){
                devData.push('<p>'+ key + ': ' + val +'</p>')
            });
            $('body').append('<div id="dev-data"></div>');
            $('#dev-data').html(devData);
        });
    }
            
    let getDataBtn = $('#get-data-btn');
    let clearDataBtn = $('#clear-data-btn');
    
    getDataBtn.on('click', function(){
        getData('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php');
    });
    
    clearDataBtn.on('click', function(){
        $('#dev-data').remove();
    });
    
});