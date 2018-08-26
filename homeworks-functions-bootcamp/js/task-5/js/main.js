// function returns nth Fibonacci element, where both first and second Fibonacci element equals 1
function fibonacciElement(n) {
    if (n === 0) {
        var str = "zero element doesn't exist!";
        return str;
    } else if (n <=2) {
        return 1;
    } else {
        
        var n1 = 1; //(n-1)
        var n2 = 1; //(n-2)
        var temp;
        
        for ( var i = 3; i <= n; i++) {
            temp = n1 + n2;
            n2 = n1;
            n1 = temp;
        }
        return n1;
    }
}

var element = 7;
var result = fibonacciElement(element);
console.log(element + " element ciągu Fibonacciego wynosi: " + result);