//implicit scope

const num = 100;
if (num > 50) console.log("Number is greater than 50");

//truthy and falsy values

false; // falsy
0; // falsy
-0; // falsy
BigInt(0); // falsy 
"" // falsy
null; // falsy
undefined; // falsy
NaN; // falsy

//++++++++++++++++++++++++++++++++++++++++++++++++
true; // truthy
1; // truthy
"Hello"; // truthy
[]; // truthy
{}; // truthy

//+++++++++++++++++++++ String Values
"0"; // truthy
'false'; // truthy
// function(){}; // truthy Empty function is truthy


// if-else statement
if (num > 50) {
    console.log("Number is greater than 50");
}
else {
    console.log("Number is not greater than 50");
}
// if-else-if statement
if (num > 50) {
    console.log("Number is greater than 50");
}
else if (num === 50) {
    console.log("Number is equal to 50");
}
else {
    console.log("Number is less than 50");
}

// check arrays if empty or not
// Using length property

const myarray = [];

if (myarray.length === 0) {
    console.log("Array is empty");
}else {
    console.log("Array is not empty");
}

//check objects if empty or not
const myobject = {};
if (Object.keys(myobject).length === 0) {
    console.log("Object is empty");
}else {
    console.log("Object is not empty");
}

// false == 0 is true

// false == '' is true

// 0 == '' is true

//false === 0 is false
// false === '' is false
// 0 === '' is false
// false == null is false
// false == undefined is false
// 0 == null is false
// 0 == undefined is false
// '' == null is false
// '' == undefined is false
// null == undefined is true
// null === undefined is false
// null == 0 is false
// null == false is false
// undefined == 0 is false
// undefined == false is false
// undefined == null is true
// undefined === null is false
// null == '' is false
// undefined == '' is false
// null == false is false
// undefined == false is false
// null === false is false
// undefined === false is false
// null === null is true
// undefined === undefined is true
// null == null is true
// undefined == undefined is true
// null == NaN is false
// undefined == NaN is false
// null === NaN is false

// undefined === NaN is false
// null === NaN is false
// NaN == NaN is false
// NaN === NaN is false
// NaN == undefined is false
// NaN == null is false
// NaN == 0 is false
// NaN == false is false
// NaN == '' is false
// NaN === undefined is false
// NaN === null is false
// NaN === 0 is false
// NaN === false is false
// NaN === '' is false
// NaN !== NaN is true
// NaN !== undefined is true

//nullish coalescing operator
// The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is null or undefined, otherwise it returns the left-hand operand.
let val_1;
val_1 = 5 ?? 10;
console.log(val_1); // output 5

//example 2

let val_2 = null ?? 10;
console.log(val_2); // output 10

let val_3 = undefined ?? 10;
console.log(val_3); // output 10

//ternary operator
const age = 18;
const canVote = age >= 18 ? "Yes, you can vote" : "No, you cannot vote";
console.log(canVote); // output: Yes, you can vote


