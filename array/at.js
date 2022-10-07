
const arr = [2, 2, 3, 3, 4, 3, 5, 6, 10, 10, 7, 8]

// console.log(arr.at(-2))
const cart = ['apple', 'banana', 'pear', 'orange', 'papaya'];
// console.log(cart.at(-2))
// console.log(cart.at(0))

cart.pop()
// console.log(cart)

cart.push(5)

// cart.push('banana@')

arr.unshift(6)

arr.shift()

cart.fill("Action", 2, 4)
// console.log(cart)
// console.log(cart)

// arr.reverse()
const incl = arr.includes(3)
// console.log(incl)

const map = arr.map(num => num * 5)

// console.log(map)

const reduce = arr.reduce((acc, num) => acc + num , 0)

// console.log(reduce)
const filter = arr.filter(num => num > 5)
console.log(filter)

const find = arr.find(num => num > 4)
// console.log(find)

console.log(arr)