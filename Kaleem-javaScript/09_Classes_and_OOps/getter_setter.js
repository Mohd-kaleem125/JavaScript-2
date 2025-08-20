// Modern Syntax 

// Always use (underscore) => (Maximum  call stack size exceed se bachne ke liye)

class User {
    constructor(email , password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase();

    }

    set email(value){
        //this._email = value.toUpperCase(); => Aise bhi likh sakte hai ise
        this._email = value

    }



   get password(){
       return this._password.toUpperCase()
    }

    set password(value){
        this._password = value;
    }
}


const kaleem = new User("kaleem@fb.com" , '786');
console.log(kaleem.email);
console.log(kaleem.password);