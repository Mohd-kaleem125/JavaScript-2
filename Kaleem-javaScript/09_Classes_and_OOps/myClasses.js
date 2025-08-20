// ES6

class User{
    constructor(username , email , password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


//const kaleem = new User(" Mohd kaleem" , "kaleem@fb.com" , "125");

//console.log(kaleem.encryptPassword());
//console.log(kaleem.changeUsername());


// Behind the scene


function User(username , email , password){
    this.username = username;
        this.email = email;
        this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea" , "tea@gmail.com" , "786");

console.log(tea.encryptPassword());
console.log(tea.changeUsername());