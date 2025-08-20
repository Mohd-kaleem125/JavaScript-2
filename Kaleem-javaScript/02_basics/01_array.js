// Array

const myArr = [1,2,3,4,5,6]
const myHeros = ["shaktiman" , "naagraj" , "Balveer"]
console.log(myArr);
console.log(myHeros)

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr2[1])


// Array Method

//myArr.push(7)
//myArr.push(8)
//console.log(myArr)
myArr.pop()
//console.log(myArr) //  it removed last index from the Array


myArr.unshift(9)
console.log(myArr)

myArr.shift()
console.log(myArr)

//console.log(myArr.includes(10))
//console.log(myArr.indexOf(3))


const newArr = myArr.join()
//console.log(newArr)
console.log(typeof newArr)


// slice splice


console.log("A" , myArr);

const myn1 = myArr.slice(1 , 3);
console.log(myn1);
console.log("B" , myArr);


const myn2 = myArr.splice(1 , 3);
console.log("C" , myArr);
console.log(myn2);