// for each Loop

const coding = ["js" , "ruby" , "java" , "pyhton" , "cpp"];

coding.forEach( function (val) {
  // console.log(val)
})


// with arrow fucntino

coding.forEach( (item) => {
   // console.log(item);

})

// another method

function printMe(item){
    console.log(item);
}


//coding.forEach(printMe);


coding.forEach( (item , index , arr) => {
    //console.log(item , index , arr);
})




const myCoding = [
    {
        languageName: "javaScript" ,
        languageFileName: "js"
    },

    {
        languageName: "java",
        languageFileName: "java"

    },

    {
        languageName: "python",
        languageFileName: "py"
    },
]


myCoding.forEach( (item) => {
    //console.log(item.languageName);
    //console.log(item.languageFileName);
})

