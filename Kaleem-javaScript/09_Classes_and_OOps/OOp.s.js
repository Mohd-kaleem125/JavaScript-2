const user = {
    username: "Mohd kaleem" ,
    loginCount: 8,
    signedIn: true,


    getUserDetails: function(){
        console.log("Got use details from the dataBase");

        //console.log(`Username: ${this.username}`);
        //console.log(this);
    }
}


//console.log(user.username);
//console.log(user.getUserDetails());
//console.log(this)


function User(username , loginCount , isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`WElcome ${this.username}`);
    }

    return this
}


const userOne = new User("Mohd kaleem" , 18 , true)
const userTwo  = new User("CoffeAurCode" , 15 , false)

//console.log(userOne);

//console.log(userTwo.constructor);