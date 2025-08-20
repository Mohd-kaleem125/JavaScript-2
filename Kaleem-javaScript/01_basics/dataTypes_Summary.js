//Primiitve Data type // copy Type

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt


const score = 100
const value = 100.3

//console.log(value);


const isLoggedIn = false
const outSideTemp = null
let userEmail;
//console.log(outSideTemp);




const id = Symbol('125')
const anotherId = Symbol('125')

//console.log(id == anotherId);


//const bigNumber =  3254169874563214n
//console.log(bigNumber);



// Reference (Non Primitive) Data type
// Array , Objects , Functions


const heros = ["shaktimaan" , "Balveer" , "Nagaraj" , "BenTen"];
console.log(heros);

let myObj = {
    name: "Kaleem" ,
    age: 20,
}

console.log(myObj);

const myFunction = function(){
    console.log("Hello Kaleem Raza You are in js file");
}
myFunction();


console.log(typeof anotherId)