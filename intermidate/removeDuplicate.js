// const numbers = [ 1, 1, 2, 3, 5,3, 5, 6, 7, 8];

// const uniqNumbers = [...new Set(numbers)];

// console.log(uniqNumbers)

const numbers = [ 1, 1, 2, 3, 5,3, 5, 6, 7, 8];

const uniqNum = numbers.filter((item, index) => {
   return  numbers.indexOf(item) === index;
})

console.log(uniqNum);