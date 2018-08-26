//using bubble alghoritm

function sortBubble(myString) {
    
    var myArray = myString.toLowerCase().split("");
    var temp = "";
    
    for (var i = 0; i< myArray.length; i++){
        
        for (var j = 0; j < myArray.length-1; j++){
            
            if (myArray[j]> myArray[j+1]){
                
                temp = myArray[j+1];
                myArray[j+1] = myArray[j];
                myArray[j] = temp;
                
            }
        }
    }
    
    return myArray.join("");
}

//using built-in functions

function sortBuiltInFun(myString) {
    
    var sortedString = myString.toLowerCase().split("").sort().join("");
    return sortedString;
}

var myString ="Akademia108";
var resultBubble = sortBubble(myString);
var resultBuiltInFun = sortBuiltInFun(myString);

console.log("Result of the bubble alghoritm: " + resultBubble);
console.log("Result of the function that uses JavaScript built-in functions: " + resultBuiltInFun);