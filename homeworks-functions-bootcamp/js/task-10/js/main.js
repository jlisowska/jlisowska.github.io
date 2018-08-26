function power(base, exponent) {
    var absExponent = (exponent < 0) ? -exponent : exponent;
    var result = 1;
    for( var i = 1; i <= absExponent; i++) {
        result *= base;
    }
    return (exponent < 0) ? 1/result : result;
}

var myBase = 2;
var myExponent = 5;
var powerResult = power(myBase, myExponent);
console.log("Liczba " + myBase + " podniesiona do potęgi " + myExponent + " równa się " + powerResult);

