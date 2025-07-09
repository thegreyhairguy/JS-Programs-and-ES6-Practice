//execution context : how java script runs your file

// execution context is the environment in which the code is executed
// it consists of the global execution context and the function execution context   

//global execution context is the default execution context
// it is created when the script is loaded and it is the first execution context that is created
// it is created in the global scope and it is the outermost execution context


//callstack

//java script is single threaded
// it means that it can only execute one piece of code at a time

//1.global execution context 2.function execution context 3. eval execution context
//call stack is a data structure that keeps track of the execution context
// it is a stack data structure that follows the last in first out (LIFO) principle 
// when a function is called, a new execution context is created and pushed onto the stack
// when the function returns, the execution context is popped off the stack 
// the call stack is used to keep track of the execution context and to manage the flow of the programe
// when a function is called, a new execution context is created and pushed onto the stack
// when the function returns, the execution context is popped off the stack

//memory creation phase or creation phase
// in this phase, the variables and functions are created and initialized
// the variables are created in the memory and initialized with undefined
// the functions are created in the memory and initialized with the function definition
// the global execution context is created in this phase
// the function execution context is created in this phase when a function is called
// the eval execution context is created in this phase when the eval function is called
// the global execution context is created in the global scope
// the function execution context is created in the function scope
//execution phase
// in this phase, the code is executed line by line
// the variables are assigned values and the functions are called
// the global execution context is executed in this phase   
// the function execution context is executed in this phase when a function is called
// the eval execution context is executed in this phase when the eval function is called
// the global execution context is executed in the global scope
// the function execution context is executed in the function scope 

//new execution context is created when a function is called
// the new execution context is pushed onto the call stack  
// when the function returns, the execution context is popped off the call stack
// the call stack is used to keep track of the execution context and to manage the flow of the program
// the call stack is a data structure that keeps track of the execution context
// the call stack is a stack data structure that follows the last in first out (LIFO) principle
// when a function is called, a new execution context is created and pushed onto the stack

//call stack is a data structure that keeps track of the execution context
// it is a stack data structure that follows the last in first out (LIFO) principle
// when a function is called, a new execution context is created and pushed onto the stack
// when the function returns, the execution context is popped off the stack
// the call stack is used to keep track of the execution context and to manage the flow of the program
// when a function is called, a new execution context is created and pushed onto the stack
// when the function returns, the execution context is popped off the stack
// the call stack is used to keep track of the execution context and to manage the flow of the program
// the call stack is a data structure that keeps track of the execution context
// it is a stack data structure that follows the last in first out (LIFO) principle
// when a function is called, a new execution context is created and pushed onto the stack
// when the function returns, the execution context is popped off the stack
// the call stack is used to keep track of the execution context and to manage the flow of the program
// when a function is called, a new execution context is created and pushed onto the stack
// when the function returns, the execution context is popped off the stack
// the call stack is used to keep track of the execution context and to manage the flow of the program
// the call stack is a data structure that keeps track of the execution context
// it is a stack data structure that follows the last in first out (LIFO) principle 