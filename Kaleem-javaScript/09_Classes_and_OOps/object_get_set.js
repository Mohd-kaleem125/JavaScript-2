// Old Syntax 
// Using Object

const User = {
    _email: 'kaleem@fb.com',
    _password: '786' ,
    
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}

const kaleem = Object.create(User)
console.log(kaleem.email);