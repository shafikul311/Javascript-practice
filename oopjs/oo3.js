let userOne = {
    email: 'shafikulweb@gmail.com',
    name: 'Shafikul',
    login(){
        console.log(this.email,this.name,  "has logged in")
    },
    logout(){
        console.log(this.email, this.name,  'has log out')
    }

}


// let prop = 'name'

//userOne.email = "shafikul@gmail.com"  // edit object properties

//userOne['email']= "shafikul00@gmail.com" // edit object properties

// userOne["name"] = "sabuj"
// userOne.name = "sabuj"

userOne.age = 23,

userOne.logInfo = function(){
    console.log(this.name, "is", this.age, 'and email is', this.email)
}

userOne.login()
userOne.logout()

userOne.logInfo()