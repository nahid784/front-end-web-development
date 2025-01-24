// var a = 50;
// var b = 60;
// var c = "Nahid";    // js automatically detects the var datatypes.

// var is a global scope

let a = 50; 
// use let instead of var in modern js
let b = 60;

let c = "Nahid";



console.log(a + b + 8)

console.log(typeof a, typeof b, typeof c)

// it will print the type of variable datatypes

const a1 = 6;

// a1 = a1 + 1;  // not allowed as a1 is declared as constant 

{
    let a = 40; // as let is a block scope
    console.log(a);
}

// datatypes

let x = 5;

let y = "word";

let z = 5.55;

const p = true;

let q = undefined;

let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)