// var = 300

//let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 50
   // console.log("INNER" , a) ;
}

//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username =  "kaleem"


     function Two(){
        const website = "youtube";
        console.log(username);
    }

    //console.log(website);

   Two() 
}

one()



if(true){
    const username = "kaleem"
    if(username === "Kaleem") {
        const website = " Youtube"
        console.log(username + website)
    }

    //console.log(website);
}

//console.log(username);


// ***************** Intresting ******************

//console.log(addone(5))

function addone(num){
    return num + 1
}




addTwo(5)  

const addTwo = function(num){ // Because it function hold the variable then it will not access the before function
    return num + 2
}

//console.log(addTwo(5))