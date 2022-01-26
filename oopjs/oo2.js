let userOne = {
    email: 'shafikulweb@gmail.com',
    name: 'Shafikul',
    login(){
        console.log(this.email, "has logged in")
    },
    logout(){
        console.log(this.email, 'has log out')
    }

}

userOne.login()
userOne.logout()