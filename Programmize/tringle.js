// find the triangle areaValue when all sides value are known 
//s = (a+b+c)/2
//area = √(s(s-a)*(s-b)*(s-c))

const s1= 30;
const s2 = 40;
const s3 = 50

const s = (s1 + s2 + s3)/2 ;
// console.log(s)

const allAreaValue = Math.sqrt(s* (s-s1)*(s- s2)* (s-s3));
console.log(allAreaValue)