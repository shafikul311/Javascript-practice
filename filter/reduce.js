
//  REDUCE IS USED FOR TOTAL SUM

let numbers = [1, 2, 3, 6, 6, 3, 6, 86];
const total = numbers.reduce( (a, b)=> {
    return a + b;
} )

console.log(total)