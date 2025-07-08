 //sigleton


 // object literal


//  object.create

//symbols

const mySym = Symbol("Key1");

 const user = { 
    name: "Saqib",
    age:34,
    "fullName":"Saqib Hassan",
    location : "Kashmir",
    email: "saq.has12@gmail.com",
    isLoggedIn : false,
    [mySym] : "myKey1",
    lastLoginDays : ["Monday","Satrurday"],

    }



 console.log(user.age);
 console.log(user["name"]);
 console.log(user["fullName"]);
 console.log(user[mySym]);


//  Object.freeze(user);

 user.email = "Saqib Ahangar";

 console.log(user["email"]);

 user.greeting = function(){
    console.log("Hello Saqib");
 }

 user.greeting2 = function(){
    console.log(`Hello Saqib,${this.name}`);  //string interpolation
 }


 console.log(user.greeting());
 console.log(user.greeting2());

 
