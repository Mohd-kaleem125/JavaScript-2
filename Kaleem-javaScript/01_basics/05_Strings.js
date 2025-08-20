const name = "Kaleem"
const repoCount = 100

//console.log(name +  repoCount + " value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



const gameName = new String('Mohd-Kaleem-com')
//console.log(gameName)


//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());


//console.log(gameName.charAt(2));
//console.log(gameName.indexOf('M'));


const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(4 , 8);
//console.log(anotherString);

const newString1 = "      kaleem           "
//console.log(newString1);
//console.log(newString1.trim());


const url = "https://kaleem.com/raza%20noori"
console.log(url.replace('%20' , '_'));

console.log(url.includes('Farhan'));

console.log(gameName.split('-'));



