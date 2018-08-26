function sortArray(array2sort) {
    for (var i = 0; i < array2sort.length; i++) {
        for (var j= 0; j < array2sort.length-1 ; j++) {
            var temp;
            if (array2sort[j] > array2sort[j+1]) {
                temp = array2sort[j+1];
                array2sort[j+1] = array2sort[j];
                array2sort[j] = temp;
                }
            }
    }
    return array2sort;
}

var myArray =  [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
var result = sortArray(myArray);
console.log("Posortowana tablica: " + result);