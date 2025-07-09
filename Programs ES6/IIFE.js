//Immediately Invoked Function Expression (IIFE) Example

(function one(){
  console.log(`Db Conneceted`);
    
})();

// Immediately Invoked Function Expression (IIFE) Example
(function two(){
  console.log(`Db Disconnected`);
    
})();

//used to avoid global scope pollution
//used to avoid variable hoisting

// named IIFE
(function aurcode() {
        console.log(`Db Connected 2`);
    }
)();


//simple IIFE with parameters
((name) => {
    console.log(`Db Disconnected 2 ${name}`);

})('Aurcode');