const user = {
    username:"kaleem",
    price: 999,

      welcomeMsg: function(){
        console.log(`${this.username} , welcome to website`);
       //console.log(this)
      }
}



//user.welcomeMsg()

//user.username = "Raza"

//user.welcomeMsg()

//console.log(this) // it give the empty object




//function chai() {
    //let username = "kaleem"
    //console.log(this.username);
//}

//chai()


//const chai = function(){
    //let username = " Mohd kaleem"
    //console.log(this.username);
//}



//const chai = () => {
    //let username = "Mohd kaleem"
    //console.log(this)
//}

//chai()


// Arrow function 

const addTwo = (num1 , num2) => {
    return num1 + num2
}
console.log(addTwo(15 ,12))




const addThree = (num1 , num2 , num3) => num1 + num2 + num3
console.log(addThree(10 , 50 ,20))




const addTwoNum = (num1 , num2) => ( {username: "Mohd kaleem"})
//console.log(addTwoNum(10 , 15))


