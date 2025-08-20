const isUserloggedIn = true
const temperature = 41


if(temperature){
    console.log("Temp is 41C");

}else{
     console.log("Temp is not 41c")
}

//console.log("Execute")



// < , > <= , >= , == , === , != , !==

const score = 200


//if(score > 100){
    //let power = "fly"
    //console.log(`user power: ${power}`);
//}else{
    //console.log("Not user power")
//}


const balance = 1000


if(balance < 500){
    console.log("Less than 500")
}else if (balance < 750){
    console.log("less than 750")
}else if(balance < 900){
    console.log("less than 900")
}else{
    console.log("less than 1200")
}




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard ){
    console.log("Allow to buy course");
}else{
    console.log("Not allowed to buy this course");
}


if(loggedInFromGoogle || loggedInFromEmail ){
    console.log("User logged in");
}else{
    console.log("User Not logged in");
}