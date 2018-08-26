var display = document.getElementById('display');
var calcItems = document.querySelectorAll('.calc-item');
var operators = document.querySelectorAll('.operator');
var delBtn = document.getElementById('del-btn');
var equalBtn = document.getElementById('equal-btn');
var num ;

calcItems.forEach(function(item){
    'use strict';
    item.addEventListener('click', function(){
        num = display.innerHTML += item.innerHTML;  
    });
});

operators.forEach(function(itemOp){
    itemOp.addEventListener('click', function(){
        display.innerHTML = num + itemOp.innerText;    
    });
});

delBtn.addEventListener('click', function(){
    display.innerHTML = '';
    num = '';
});

equalBtn.addEventListener('click', function(){    
    display.innerHTML = eval(display.innerHTML);
    if(display.innerHTML == "Infinity" || display.innerHTML == "-Infinity" ){
        alert('Upsss... you probably divide by zero');
        display.innerHTML = '';
    }
});






































