// For Loop

for(let i = 0; i<= 10; i++){
    const element = i;
    if(element == 5){
        //console.log("5 is best number");
    }
    //console.log(element);
}


for(let i = 1; i <= 10; i++){
   //
   
      //console.log(`outer loop value is: ${i}`);
    for(let j = 1; j<= 10; j++){
        //console.log(`Inner loop value is: ${j}`);

       // console.log(i + '*' + j + ' = ' + i * j);
    }
}




let myArr = ["spiderman" , "flash" , "superman" , "batman"];

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    //console.log(myArr);
    
}


// break and continue

for (let i = 1; i <= 20; i++) {
      if(i == 5){
       // console.log('5 Is Detected');
        break;
      }
   // console.log(`value of index is ${i}`);
}


for (let i = 1; i <= 10; i++) {
    if(i == 4){
        console.log("4 is skip");
        continue;
    }
    console.log(`value of index is ${i}`);
}
