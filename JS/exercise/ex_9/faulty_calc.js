/* create a faulty calculator using js
it does the following:
1. It takes two number as input from the user
2. it performs wrong operation as follows:
+ -> -
* -> +
- -> /
/ -> **

it performs wrong operations 10% of the time, else it performs the right operation.
*/

// solution --

let rand = Math.random();

console.log(rand);

let num1 = parseFloat(prompt("Enter the first number: "));
let num2 = parseFloat(prompt("Enter the second number: "));
let op = prompt("Enter the operation: ");

if(rand > 0.1){
    console.log("correct operation");
    if (op== "+"){
        console.log("The sum of the numbers is: ", num1 + num2);
    }
    else if(op == "-"){
        console.log("The difference of the numbers is: ", num1 - num2);
    }
    else if(op == "*"){
        console.log("The product of the numbers is: ", num1 * num2);
    }
    else if(op == "/"){
        console.log("The division of the numbers is: ", num1 / num2);
    }
    else{
        console.log("Invalid operation");
    }
}
else{
    console.log("incorrect answer");
    if (op== "+"){
        console.log("The difference of the numbers is: ", num1 - num2);
    }
    else if(op == "-"){
        console.log("The division of the numbers is: ", num1 / num2);
    }
    else if(op == "*"){
        console.log("The sum of the numbers is: ", num1 + num2);
    }
    else if(op == "/"){
        console.log("The power of the numbers is: ", num1 ** num2);
    }
    else{
        console.log("Invalid operation");
    }
}

// alternative method
// faulty calculator

let a = Number(prompt("Enter First Number: "));
let c = prompt("Enter sign:");
let b = Number(prompt("Enter 2nd Number: "));


const rand = Math.random();
console.log(rand);
if(rand<0.1){
    if(c=="+"){
        addition = a - b;
        console.log("Addition is:",addition);
    }
    if(c=="-"){
        sub = a / b;
        console.log("Substraction is:",sub);
    }
    if(c=="*"){
        multi = a + b;
        console.log("Multiplication is:",multi);
    }
    if(c=="/"){
        divi = a ** b;
        console.log("Division is:",divi);
    }
    
    
}

else{
    if(c=="+"){
        addition = a + b;
        console.log("Addition is:",addition);
    }
    if(c=="-"){
        sub = a - b;
        console.log("Substraction is:",sub);
    }
    if(c=="*"){
        multi = a * b;
        console.log("Multiplication is:",multi);
    }
    if(c=="/"){
        divi = a / b;
        console.log("Division is:",divi);
    }
}