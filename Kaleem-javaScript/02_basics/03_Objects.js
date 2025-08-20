// Singleton object => if we create object with constructor then it is called singleton object
// Object.create


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Mohd Kaleem" ,
    "full name": "Mohd kaleem Raza",
    [mySym]: "myKey1",
    age: 20,
    location: "Bareilly",
    email: "Kaleem@gamil.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday" , "Saturday"]
}


//console.log(JsUser);
//console.log(JsUser.email);

//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);
//console.log([typeof mySym]);


JsUser.email = "kaleem@chatgpt.com"
//Object.freeze(JsUser)

JsUser.email = "microsoft@gmail.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user , ${this.name}`);

}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


