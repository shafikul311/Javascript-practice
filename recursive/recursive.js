//A recursive function is a function that calls itself until it doesn’t.
// And this technique is called recursion.

function sumOfDigits(num) {
    if (num == 0) {
        return 0;
    }
    return num % 10 + sumOfDigits(Math.floor(num / 10));
}

let num = sumOfDigits(100);
console.log(num);