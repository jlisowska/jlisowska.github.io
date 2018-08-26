'use strict';
$(function(){
    
    let getDataBtn = $("#get-data-btn");
    let parBuy = $("p#buy");
    let parSell = $("p#sell");
    
    
    getDataBtn.on('click', function(){
        
        $.getJSON('https://blockchain.info/pl/ticker', function(bitcoinRate){
           
            $.each(bitcoinRate, function(key,val){

                if(key == "PLN") {
                    
                    var buy = parseFloat(val.buy.toFixed(2));    
                    var sell = parseFloat(val.sell.toFixed(2)); 
                    
                    var numBuy = parseFloat(parBuy.text());
                    var numSell = parseFloat(parSell.text());
                    
                    if(buy > numBuy) {
                        parBuy.html(buy + ' ' + '<i class="fas fa-arrow-up">'+'</i>');
                    } else if (buy < numBuy) {
                        parBuy.html(buy + ' ' + '<i class="fas fa-arrow-down">' + '</i>');
                    } else  {
                        parBuy.html(buy + ' ' + '<i class="fas fa-minus">'+'</i>' );    
                    } 
                    
                    if(buy > numSell) {
                        parSell.html(sell + ' ' + '<i class="fas fa-arrow-up">'+'</i>' );
                    } else if (buy < numSell) {
                        parSell.html(sell + ' ' + '<i class="fas fa-arrow-down">' + '</i>');
                    } else  {
                        parSell.html(sell + ' ' + '<i class="fas fa-minus">'+'</i>');
                    } 
                }
            });
        });
    });
    
});