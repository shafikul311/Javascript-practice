const users = [
    {id: 1, name: 'Shafikul', email: 'shfikulislam067@gmail.com', age: 23},
    {id: 2, name: 'Milos', email: 'miloslam067@gmail.com', age: 26},
    {id: 3, name: 'Ivan', email: 'ivan@gmail.com', age: 18},
    {id: 4, name: 'Bora' , email: 'bora@gmail.com' , age: 21},
    {id: 5, name: 'Marina', email: 'marina@gmail.com', age: 28},
    {id: 6, name: 'Anika', email: 'anika@gmail.com', age:19},
    {id: 7, name: 'Arbe', email: 'arbe@gmail.com', age: 4}
];


//find Method

const findUnder18 = users.find(user => user.age< 18);
// console.log(findUnder18)

//over 18
const findOver18 = users.find(user => user.age>18);
// console.log(findOver18)


// filter method

const filterUnder20 = users.filter( user => user.age< 20 );
// console.log(filterUnder20)

// over 20 
const filterOver20 = users.filter( user => user.age> 20 );
// console.log(filterOver20, filterOver20.length)


const mapUser = users.map(user => user.name);
console.log(mapUser, mapUser.length)


