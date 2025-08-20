class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }


     static createId(){  // static has not give own Access anyone
        return '125'
      }
}


const kaleem = new User("Kaleem");
//console.log(kaleem.createId())


class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone" , "i@phone.com")
//iphone.logMe()
console.log(iphone.createId());

