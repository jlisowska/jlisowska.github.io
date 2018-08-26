'use strict';
function selectSort(array2sort){
   
    for (let i = 0; i < array2sort.length; i++){
        let min = i;
        for (let j = i+1; j < array2sort.length; j++){
            if(array2sort[j] < array2sort[min]){
                min = j;
            }
        }
            
        if(min != i) {
            let temp = array2sort[i];
            array2sort[i] = array2sort[min];
            array2sort[min] = temp;
        }
        
    }
    return array2sort;
}

let myArray = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];
let sortedArray = selectSort(myArray);
console.log('Posortowana tablica: ' + sortedArray)