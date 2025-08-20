// Immediately Invoked Function Expression (IIFE)

// ()() => it is called IIFE


// Named IIFE
(function chai(){
console.log('DB CONNECTED');
})();


// V.V.V imp 2 IIFE ko ek sath execute karne ke liye upar bale ko semicolon se seprate karna padega otherwise 2 IIFE execute nhi hoga

// Unnamed IIFE 
((name) => {
    console.log(`DSA START SOON ${name}`)
})("Mohd Kaleem")


