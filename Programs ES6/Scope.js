// // // let var const



// // // {} is called as scope when used in function loops conditionals 

// // var c = 30; //global scope
// // let a = 300;
// // if (true){
// //     let a = 10;  // local scope
// //     const b = 20;
    
// // }



// // console.log(a);
// // console.log(b);
// // console.log(c); // only this will print and that is the problem because of its universal scope and it can be mdified anywhere 
// // // never use var


// //nested scope  closures in js  


// function one(){
//     const username = "SAQIB";

//     function two(){
//         const website = "Youtbe";
//         console.log(username);
//     }
//     // console.log(website); // will not execute
//     two();
// }
// one();   // inner function can access the variables of outerr function variables


//interesting example +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

addone(5);

function addone(num){
    return num + 1;
}




const addTwo = function(num){
    return num +2;
}

addTwo(5);   //Function Hoisting