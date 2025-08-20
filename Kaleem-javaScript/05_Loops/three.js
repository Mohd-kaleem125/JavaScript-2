// for of Loop

const arr = [1,2,3,4,5];

for (const num of arr) {
    //console.log(num);
}


const greetings = "Hello World"

for (const greet of greetings) {
    //console.log(` char is ${greet}`);
    
}


// Maps

const map = new Map()

map.set('IN' , "India")
map.set('USA' , "United State of America")
map.set('Fr' , "France")
map.set('IN' , "India") // Dublicate value can not access it
//console.log(map);

for (const [key , value] of map) {
   // console.log(key , ':-' , value);
   // console.log(key)
    
}


const myobj = {                // for of Loop can not access object as a key value error myobj is not iterable
    game1: 'NFS' , 
    game2: 'BGMI'
}

for (const [key , value] of myobj) {
    console.log(key , ':-' , value);
    
}