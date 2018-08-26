function sumArray(myArray) {

    var arraySum = 0;

    for (var i = 0; i< myArray.length; i++) {
        arraySum += myArray[i];
    }

    return arraySum;
}

function productArray(myArray) {

    var arrayProduct=1;

    for (var i = 0; i< myArray.length; i++) {
        arrayProduct *= myArray[i];
    }

    return arrayProduct;
}


function sumAndProduct(myArray) {
    
    console.log("Sum of array elements: " + sumArray(myArray));
    console.log("Product of array elements: " + productArray(myArray));
}

var myArray = [1,2,3,4,5];
sumAndProduct(myArray);