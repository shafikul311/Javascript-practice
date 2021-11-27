function passwordValid (password, username){
    if(password.length< 8){
        return false;
    }
    if(password.indexOf(' ') !== -1){
        return false;
    }
    if(username.indexOf(' ') !== -1){
        return false;
    }

    return true;
}

console.log(passwordValid('ksdfjkldsjf', 'shafi kullsjfks'))