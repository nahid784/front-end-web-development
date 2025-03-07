/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

// Generate a random number between 0 and 1
let random = Math.random();
console.log(random); // Log the random number for debugging

// Prompt user to enter first number
let a = prompt("Enter first number");

// Prompt user to enter an operation (+, -, *, /)
let c = prompt("Enter operation");

// Prompt user to enter second number
let b = prompt("Enter second number");

// Define an object that maps correct operations to faulty ones
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**", // Exponentiation instead of division
};

// Condition to determine whether to perform a correct or faulty operation
if (random > 0.1) {
    // 90% of the time, perform the correct calculation
     console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`); 
} else {
    // 10% of the time, perform a faulty calculation by replacing the operation
    c = obj[c]; // Replace operation with the faulty one
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
