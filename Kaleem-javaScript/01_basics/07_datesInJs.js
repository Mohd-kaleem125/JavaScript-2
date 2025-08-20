// Dates 


let myDate = new Date()
//console.log(myDate);

// Function to run Strings

//console.log(myDate.toString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toJSON);
//console.log(myDate.toLocaleDateString);
//console.log(myDate.toLocaleTimeString);



//let myCreatedDate = new Date(2025 , 0 , 28);
let myCreatedDate = new Date(2025 , 0 , 28 , 5 , 3);
//console.log(myCreatedDate.toLocaleString());




//let date = new Date("2025-01-15")
let date = new Date("01-14-2025");
//console.log(date.toLocaleString());


let myTimeStamp = Date.now()
console.log( typeof Date)
console.log(myTimeStamp);


console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/100))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())


 let newdate = newDate.toLocaleString('default' , {
    weekday: "long",
})

console.log(newdate)


