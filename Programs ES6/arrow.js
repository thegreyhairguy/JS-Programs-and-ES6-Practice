// const user = {
//     username: 'john_doe',
//     price : 100,
//     welcomeMessage: function() {
//         console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
//     }
// }

// user.welcomeMessage(); // Output: Welcome, john_doe! Your price is $100.

// user.username = 'jane_doe';

// user.welcomeMessage(); // Output: Welcome, jane_doe! Your price is $100.

// console.log(this); // Output: { username: 'jane_doe', price: 100, welcomeMessage: [Function: welcomeMessage] }


// function one() {
//     let username = 'john_doe';
//     console.log(this.username); // Output: undefined in strict mode, 'john_doe' in non-strict mode
// }   

// one(); // Output: Window object in browsers or global object in Node.js

// arow

// const one = () => {
//     let username = 'john_doe';
//     console.log(this.username); // Output: undefined, as arrow functions do not have their own `this`
// } 
// one(); // Output: undefined, as arrow functions do not have their own `this` context


//syntax of basic arrow function explicit return
const addTwo = (num1 , num2)  => {
    return num1 + num2;
}
addTwo(5, 10); // Output: 15

// implicit return
const addTwoImplicit = (num1, num2) => num1 + num2;
addTwoImplicit(5, 10); // Output: 15

//paranthesis are optional for single parameter
const square = num => num * num;
console.log(square(5)); // Output: 25

//paranthesis are required for multiple parameters
const multiply = (num1, num2) => (num1 * num2);   
console.log(multiply(5, 10)); // Output: 50

//return object literal
const createUser = (username, price) => ({
    username: username,
    price: price
});
console.log(createUser('john_doe', 100)); // Output: { username: 'john_doe', price: 100 }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//use in arrays

const myArray = [2, 4, 6, 8, 10];

myArray.forEach(num => {
    console.log(num * 2); // Output: 4, 8, 12, 16, 20
});
//filtering even numbers
const evenNumbers = myArray.filter(num => num % 2 === 0);   
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
//mapping to square each number
const squaredNumbers = myArray.map(num => num * num);
console.log(squaredNumbers); // Output: [4, 16, 36, 64, 100]
//reducing to sum all numbers
const sum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 40
//chaining methods
const result = myArray
    .filter(num => num % 2 === 0)
    .map(num => num * num)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(result); // Output: 220 (sum of squares of even numbers)
//using with setTimeout
setTimeout(() => {
    console.log('This message is delayed by 2 seconds');
}, 2000); // Output: This message is delayed by 2 seconds after 2 seconds
//using with setInterval
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stop the interval after 5 counts
    }
}, 1000); // Output: Count: 1, Count: 2, ..., Count: 5 (every second)
//using with promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 2000);
    });
};
fetchData().then(data => {
    console.log(data); // Output: Data fetched successfully after 2 seconds
}).catch(error => {
    console.error('Error:', error);
});
//using with event listeners
const button = document.createElement('button');    
button.textContent = 'Click Me';
document.body.appendChild(button);
button.addEventListener('click', () => {
    console.log('Button was clicked!');
}); // Output: Button was clicked! when the button is clicked
//using with class methods
class User {
    constructor(username, price) {
        this.username = username;
        this.price = price;
    }

    welcomeMessage = () => {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
    }
}
const user = new User('john_doe', 100);
user.welcomeMessage(); // Output: Welcome, john_doe! Your price is $100.
//using with class methods and arrow function
class UserWithArrow {
    constructor(username, price) {
        this.username = username;
        this.price = price;
    }

    welcomeMessage = () => {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
    }
}
const userWithArrow = new UserWithArrow('jane_doe', 150);
userWithArrow.welcomeMessage(); // Output: Welcome, jane_doe! Your price is $150.
//using with class methods and regular function
class UserWithRegular {
    constructor(username, price) {
        this.username = username;
        this.price = price;
    }

    welcomeMessage() {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
    }
}
const userWithRegular = new UserWithRegular('alice_doe', 200);
userWithRegular.welcomeMessage(); // Output: Welcome, alice_doe! Your price is $200.    
//using with class methods and regular function with bind
class UserWithBind {
    constructor(username, price) {
        this.username = username;
        this.price = price;
    }

    welcomeMessage() {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
    }
}
const userWithBind = new UserWithBind('bob_doe', 250);
const boundWelcomeMessage = userWithBind.welcomeMessage.bind(userWithBind);
boundWelcomeMessage(); // Output: Welcome, bob_doe! Your price is $250.
//using with class methods and regular function with call
class UserWithCall {
    constructor(username, price) {
        this.username = username;
        this.price = price;
    }

    welcomeMessage() {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
    }
}
const userWithCall = new UserWithCall('charlie_doe', 300);
userWithCall.welcomeMessage.call(userWithCall); // Output: Welcome, charlie_doe! Your price is $300.
//using with class methods and regular function with apply
class UserWithApply {
    constructor(username, price) {
        this.username = username;
        this.price = price;
    }

    welcomeMessage() {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
    }
}   
const userWithApply = new UserWithApply('dave_doe', 350);
userWithApply.welcomeMessage.apply(userWithApply); // Output: Welcome, dave_doe! Your price is $350.
//using with class methods and regular function with setTimeoutq
class UserWithTimeout {
    constructor(username, price) {
        this.username = username;
        this.price = price;
    }

    welcomeMessage() {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
    }
}   
const userWithTimeout = new UserWithTimeout('eve_doe', 400);
setTimeout(() => {
    userWithTimeout.welcomeMessage(); // Output: Welcome, eve_doe! Your price is $400 after 2 seconds
}, 2000); // Output: Welcome, eve_doe! Your price is $400 after 2 seconds
//using with class methods and regular function with setInterval
class UserWithInterval {
    constructor(username, price) {
        this.username = username;
        this.price = price;
    }

    welcomeMessage() {
        console.log(`Welcome, ${this.username}! Your price is $${this.price}.`);
    }
}   
const userWithInterval = new UserWithInterval('frank_doe', 450);
let countInterval = 0;
