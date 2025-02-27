// notes:
// we can use let instead of var
// var is global scope
// let is block scope
// variables are case sensitive in JS
// we cannot use number before var like 55var
// can us &,_,word.
// js automatically detects variable datatypes
// null is showed as object dataype in console


// var a = 50;
// var b = 60;
// var c = "Nahid";    // js automatically detects the var datatypes(e.g: interger, float, string).
// var is a global scope

let a = 50;
// use let instead of var in modern js
let b = 60;

let c = "Nahid";



console.log(a + b + 8)

console.log(typeof a, typeof b, typeof c)

// it will print the type of variable(a,b,c) datatypes

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

let r = null;   // type of null object imp ques for interview

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// object

let o = {
    "name": "Nahid",
    "job code": 5600,
    "is handsome": true
}

// it defines about someone or some object

console.log(o)

o.salary = "100 core"
console.log(o)
// will add salary automatically in o object.

o.salary = "200 core"
console.log(o)
// it will replace automatically.





