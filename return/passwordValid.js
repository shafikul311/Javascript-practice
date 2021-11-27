function passwordValid (password){

    if(password.length < 8 ){

        return "length too short";
    }
    if(password.indexOf(' ') !==  -1 ){

        return "indexOf can not contain hull";
    }

   

    return 'Pass Ok';

}

const pa = passwordValid(' ');
console.log(pa)