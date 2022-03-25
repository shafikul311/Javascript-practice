const Person = {
    firstName: 'Shafikul',
    lastName: 'Islam',
    
    getFullName: function() {
        return this.firstName + ' ' + this.lastName ;
    }
}


console.log(Person.getFullName())