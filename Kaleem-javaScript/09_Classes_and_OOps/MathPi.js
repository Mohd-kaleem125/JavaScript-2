const descripter = Object.getOwnPropertyDescriptor(Math, "PI");


//console.log(descripter);

//Math.PI = 5;
//console.log(descripter);


const chai = {
    name: 'ginger chai' ,
    price: 300,
    isAvailable: true,


    orderChai: function(){
        console.log("Chai nahi bani hai");
    }
}


console.log(Object.getOwnPropertyDescriptor(chai , "name"));


Object.defineProperty(chai , "name" , {
      // writable: false,
       enumerable: true,   // false
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));



for(let [key , value] of Object.entries(chai)){
    
    if(typeof value !==  'function'){
        console.log(`${key}: ${value}`);
    }


}