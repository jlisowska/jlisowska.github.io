function isEven(number) {
    return (number % 2 == 0) ?  true : false;
}

var num = 11;
var result = isEven(num);
console.log("Liczba " + num + " jest " + ((result == true) ? "parzysta" : "nieparzysta"));