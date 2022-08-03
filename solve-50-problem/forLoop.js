
// basic for loop 1
const lo = 10;
for (let i = 0; i <= lo; i++) {
    // console.log('The loop is ', i)
    
}

// 2

for (let i = 0; i <= lo; i++) {
    if(i%2==0){
        // console.log('The number is even', i)
    }else if(i%2==1){
        // console.log('The number is odd', i)
    }
    
}

// 3

for (let i = 0; i <= lo; i++) {
    // console.log('multiply with num ', i * 7)
}


// 4

let sum = 0;

for (let i = 0; i <= lo; i++) {
    sum += i;
    // console.log(sum)
    
}

console.log('The sum is ', sum)