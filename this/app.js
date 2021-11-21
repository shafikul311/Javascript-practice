// The JavaScript this keyword refers to the object it belongs to]


const person = {
    firstName: 'Shafikul',
    lastName: 'Islam',
    eye: 'black',
    age: 24,
    education: 'BSC in computer science and engineering',
    fullName : function (){
        return this.firstName + " " + this.lastName
        
    },

    


}
console.log(`My name is ${person.fullName()}, eye color is black and age  ${person.age} `)