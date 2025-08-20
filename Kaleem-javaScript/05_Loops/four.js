// for in Loop


const myObj = {           // for in loop access object as a key or value 
    js: 'JavaScript' ,
    cpp: 'C++' ,
    rb: "Ruby" ,
    swift: "swift by apple"
}


for (const key in myObj) {
   // console.log(`${key} shortcut is for ${myObj[key]}`);     
    
}


const programming = ["Js" , "rb" , "py" , "Java" , "cpp"];

for (const key in programming) {

    //console.log(programming[key]);
  
}


const map = new Map()

map.set('IN' , "India")
map.set('USA' , "United State of America")
map.set('Fr' , "France")
map.set('IN' , "India") 

for (const key in map) {
    console.log(key);
}