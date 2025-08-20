function SetUsername(username){
    // complex DB  Calls

    this.username = username
    console.log("called");
}


function createUser(username , email , password){
    SetUsername.call(this, username)  // is line me call ko hta kar code run karke dekhe ye bala this apna hud ka hota hai fir chahe rference bala this(this.username) hta do tab bhi ye uski property le leta hai

    this.email = email
    this.password = password

}


const coffe = new createUser("coffe" , "coffee@insta.com" , "125");
console.log(coffe);