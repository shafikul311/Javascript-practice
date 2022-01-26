class User {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
        this.score = 0;
    }

    login(){
        console.log(this.email ,"is just login now")
    }


    logout(){
        console.log(this.email ,"is just login now")
    }

     updateScour(){
        this.score++
        console.log(this.email, 'score is now', this.score)
        return this;
    }

    
}

let userOne = new User('shafikul' , "shafiku@gmail.com", 23);
let userTwo = new User('sharikul' , "sharikul@gmail.com", 28);

userOne.login();
userTwo.logout();


