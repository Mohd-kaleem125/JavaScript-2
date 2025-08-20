function init(){
    let name = "Kaleem";

    function displayName(){
        console.log(name);
    }
    displayName();
}
init();



function outer(){
    let username = "Mohd Kaleem";

   // console.log("OUTER" , secret);  ye yha access nahi ho skta

    function inner(){

        //let secret = 'my125'
        console.log("INNER" , username);
    }

    function innerTwo(){
        console.log("innerTwo" , username);
    }
    inner();
    innerTwo();
}
outer();

//console.log("TOO OUTER" , username);  yha iska access nahi ho skta 