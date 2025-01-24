// var a = 50;
// var b = 60;
// var c = "Nahid";    // js automatically detects the var datatypes.


let a = 50; 
// use let instead of var in modern js
let b = 60;

let c = "Nahid";



console.log(a + b + 8)

console.log(typeof a, typeof b, typeof c)

// it will print the type of variable datatypes

const a1 = 6;

a1 = a1 + 1;  // not allowed as a1 is declared as constant 

{
    let a = 40; // as let is a block scope
    console.log(a);
}