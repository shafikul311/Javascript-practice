class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        // this.score = 0;
    }

    login(){
        console.log(this.email, "just log in ")
    }
    

    logout(){
        console.log(this.email, 'just log out')
    }

    // updateScour(){
    //     this.score++
    //     console.log(this.email, 'score is now', this.score)
    //     return this;
    // }


}

let userOne = new User( 'shafikul@gmail.com', 'shafikul');
let userTwo = new User("shafikulWeb@gmail.com", "sha000")


// userOne.login().updateScour();

// console.log(userOne)

// userOne.login();
// userTwo.logout()