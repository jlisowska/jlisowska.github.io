function insertSort(array) {
    for (var i = 1; i < array.length; i++) {
        var unsortedElement = array[i];
        var j = i - 1;
        while(j >= 0 && array[j] > unsortedElement) {
            array[j+1] = array[j];
            j--;
        }
        array[j+1] = unsortedElement;
    }
    return array;
}

var myArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
var result = insertSort(myArray);
console.log("Posortowana tablica: " + result);




