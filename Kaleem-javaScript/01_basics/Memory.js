// Memory is Two types in js


// Stack Memory => is called (Primitive)

//Heap Memory => is called (Non Primitive)


let myName = "Mohd Kaleem"
let anotherName = myName
anotherName = "chaiaurcode"

console.log(myName)
console.log(anotherName)


let userOne = {
    email: "user@google.com" ,
    upi: "user@ybl",

}
console.log(userOne);


// To work as a Heap memory

let userTwo = userOne

userTwo.email = "Farhan@google.com"

console.log(userOne.email)
console.log(userTwo.email)
