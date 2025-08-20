function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("L");
    console.log("E");
    console.log("E");
    console.log("M");
}


//sayMyName()


function addNum(num1 , num2){
    //console.log(num1 + num2)
}


function addTwoNum (num1 , num2){
    let result = num1 + num2
    return result;
    return num1 + num2;
}

const result = addTwoNum(10, 5)
//console.log("Result: " ,  result);


function loginUserMsg(username = "Kaleem"){
    if(!username){
        console.log("Please enter a user name");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMsg("Raza"))


function calculateCardPrice( val1 , val2 , ...num1){ // ...num 
    return num1
    
}

//console.log(calculateCardPrice(200 , 400 , 500 , 2000));


const user = {
    username: "Mohd kaleem" ,
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


//handleObject(user)


//handleObject({
    //username: "Raza",
    //price: 399
//})


const myNewArr = [200 , 400 , 100 , 600];


function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArr));

console.log(returnSecondValue([200 , 400 , 100 , 600]))