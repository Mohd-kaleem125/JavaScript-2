//let myName = "kaleem     "
//let myChannel = "coffe     "

//console.log(myName.trueLength);



let myHeros = ["Thor" , "spiderman" , "batman"];

let heroPower = {
    Thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}


Object.prototype.kaleem = function(){
    console.log(`kaleem is present in all objects`);
}

Array.prototype.heyKaleem = function(){
    console.log(`Kaleem say Hello`);

}


//heroPower.kaleem();
//myHeros.kaleem();
//myHeros.heyKaleem();
//heroPower.heyKaleem();


// inheritance

const user = {
    name: "kaleem",
    email: "coffe@google.com",
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment' ,
    fullTime: true,
    __proto__: TeachingSupport

}

Teacher.__proto__ = user

// Modern Syntax

Object.setPrototypeOf(TeachingSupport , Teacher)

let anotherUsername = "MohdKaleem     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"kaleem".trueLength()
"cofee".trueLength()

