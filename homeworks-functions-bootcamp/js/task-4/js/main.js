function sumOfTheSquares(array) {
    
    var sum = 0;
    
    for (var i = 0; i < array.length; i++) {
        sum += Math.pow(i,2);
    }
    return sum;
}

var myArray = [0,1,2,3,4,5];
var result = sumOfTheSquares(myArray);
console.log("Suma kwadratów elementów tablicy: " + myArray + " wynosi: " +result);