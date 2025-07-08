// singleton or constructor
const tindeUser = new Object();


tindeUser.id = "124556ABC";
tindeUser.name ="Sammy";
tindeUser.isLoggedIn = false;

console.log(tindeUser);



const regularUser = {
    email: "some@gmail.com",
    fullName : {
        userFullName : {
            firstName :"Saqib",
            lastName : "Hassan"

        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);
console.log(regularUser.fullName.userFullName.lastName);


const obj1 = {
    1: "a", 2 :"b"
}

const obj2 = {
    3: "c",  4 :"d"
}


// one way of mergining
const obj3 = {obj1 , obj2};

console.log(obj3);


// another way of merging we can assign values using assign
const obj4 = Object.assign(obj1 , obj2);
const obj5 = Object.assign({},obj1 , obj2);

console.log(obj4);
console.log(obj5);

//another way most used
const obj6 = {...obj1 , ...obj2};
console.log(obj6);

//from data base values
//example
const users = [

    {
        id : 1,
        email :"hr1@gmail.com",
    },

     {
        id : 2,
        email :"hr2@gmail.com",
    },
     {
        id : 3,
        email :"hr3@gmail.com",
    },
     {
        id : 4,
        email :"hr4@gmail.com",
    }
    
]


users[1].email;
console.log(tindeUser);
console.log(Object.keys(tindeUser));
console.log(Object.values(tindeUser));
console.log(Object.entries(tindeUser));


console.log(tindeUser.hasOwnProperty('isLoggedIn'));






















//OPTIONAL CHAINING LEARN