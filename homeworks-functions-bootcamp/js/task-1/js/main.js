function reverseForLoop(str) {
    'use strict';
    var reverseStr1 ="";
    for (var i = str.length-1; i>=0; i--) {
        reverseStr1 += str[i];
    }
    return reverseStr1;
}

function reverseBuiltInFun(str){
    var reverseStr2 = str.split("").reverse().join("");
    return reverseStr2;
}

var myString = "Akademia108";
var resultForLoop = reverseForLoop(myString);
var resultBuiltInFun = reverseBuiltInFun(myString);

console.log("Result of the function that uses for loop: "  + resultForLoop);
console.log("Result of the function that uses js built-in functions: "  + resultBuiltInFun);