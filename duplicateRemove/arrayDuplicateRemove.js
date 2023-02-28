let arr = [ 1, 3,1, -1,-1, -5, 5, 5, 6, 8, 6, 6, 7, 8, 4, 3, 2, 7];

uniqNum= [];
for(let i = 0; i<arr.length; i++){
    let element = arr[i];
    if(uniqNum.indexOf(element)== -1){
        uniqNum.push(element)
    }
}
const uniqSort = uniqNum.sort()

console.log('uniqNum is ', uniqSort);