const number = [40, 100, 1, 5, 25, 10];


// small to bit 
 const sortNumber = number.sort(function (a, b){
    return a- b
})


console.log(sortNumber)

// big to small 
const bigSort = number.sort(function (a, b){
    return b- a;
})


console.log(bigSort)


// char sort 
const fruits = ["Banana", "Orange", "Apple", "Mango"]; 
 const charSort = fruits.sort()

 console.log(charSort)