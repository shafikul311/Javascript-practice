
// NESTED LOOP

// for(let i = 0; i <=10; i++){
//     console.log("Outer loop i : ", i);
//     for(let j = 10; j >=0; j--){
//         console.log("  Inner loop J : ", j)
//     }
// }



let gameB = [
    [1, 2, 3, 4, 5],
    [23, 4, 5, 56, 67],
    [23, 3, 34, 35, 3],
    [23, 4, 34, 35, 3],
];


let total = 0;
for(let i = 0; i < gameB.length; i++) {
    console.log(gameB[i]);
    let row = gameB[i]
    for(let j =0; j< row.length; j++) {
        total += row[j]
        console.log(total)

    }
}

