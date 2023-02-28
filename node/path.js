const path = require('path')

console.log(path.sep)

// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

// const abfile = path.resolve(__dirname, 'users', 'user', 'user.txt')
// console.log(abfile)

// console.log(path.basename(abfile))