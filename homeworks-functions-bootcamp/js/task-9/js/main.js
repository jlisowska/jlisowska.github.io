function numberOfLetterOccurance(word, letter) {
    var letterArray = word.toLowerCase().split("");
    var sum = 0;
    letterArray.forEach(function(char){
        if(char == letter) {
            sum += 1;
        }
    });
    
    return sum;
}

var str = "Szkoła Programowania Akademia 108";
var char = "a";
var result = numberOfLetterOccurance(str, char);
console.log("Liczba liter " + "\"" + char + "\"" + " w wyrażeniu " + "\"" + str + "\"" + " wynosi: " + result);