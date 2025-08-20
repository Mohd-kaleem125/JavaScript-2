// Old Syntax 
// Using Function


function User(email , password){
    this._email = email
    this._password = password


    Object.defineProperty(this , 'email' , {
        get: function(){
            return this._email.toUpperCase()
        },

        set: function(value){
            this._email = value

        }
    })

}

const kaleem = new User("Arham@insta.com" , '786');
console.log(kaleem.email);