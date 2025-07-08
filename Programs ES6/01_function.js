// // functions

// function myName(){
//     console.log("SAQIB");
// }
// myName();

// function num(num1 ,num2){  //parameters
//     return num1+num2;
// }
// console.log(num(11,12));  //arguments


// function loginUser(username){

//     if(username === undefined){  //!username
//         console.log("Please Enter a username");
//         return
        
//     }else{
//         return `${username} just logged in`;
//     }
// }


// console.log(loginUser());

//shopping card problem

function calculateCartPrice(...num1){  //rest operator or spread operator  ...num1
    return num1;
}

console.log(calculateCartPrice(200,400,500));


function calculateCartPrice(val1,val2,...num1){  //rest operator or spread operator  ...num1
    return num1;
}

console.log(calculateCartPrice(200,400,500,600,700,800,900));


//passing object to function
const user = {
    userName : "SAQIB",
    price : 99
}

function handleObject(anyObject){

    console.log(`username is :${anyObject.userName} and price is ${anyObject.price}`);

}


// handleObject(user);

handleObject({
    userName : "SAM",
    price : 399
})

//passing array to function
const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1];
}


console.log(returnSecondValue(myNewArray));
