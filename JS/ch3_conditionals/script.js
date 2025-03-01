console.log("It is a conditional if else of js")

let age = 17;
let grace = 2;

// Arithmetic Operators
console.log("Summation is ", age + grace);
console.log("Substract is ", age - grace);
console.log("Multiplication is ", age * grace);
console.log("Division is ", age / grace);
console.log("Power of", age, "^", grace, "is", age ** grace);
console.log("Remainder or Modulus is ", age % grace);

// Assignment Operators
age += grace;   // age = age + grace;
console.log("Updated Age is ", age);

age -= grace;   // age = age - grace;
console.log("Updated Age is ", age);

// with grace
if (age + grace > 18) {
    console.log("you can drive");
}
else {
    console.log("you cant drive");
}

// without grace
if (age > 18) {
    console.log("you can drive");
}
else {
    console.log("you cant drive")
}

// equal to
if (age == age) {
    console.log("age is equal");
}

// "3" == 3, true (this compares only value)
// "3" === 3. false (this compares value and datatype)


// if, else-if, else statement
// these three works together
// if one of them is true then others will not work or run
if (age != 17) {
    console.log("only if");
}
else if (age == 0) {
    console.log("you are wrong");
}
else {
    console.log("you cant drive")
}
// we can use multiple else-if statements

// ternary operator
// condition ? true : false
a = 10;
b = 8;
let c = a > b ? (a - b) : (b - a);
console.log("Ternary Operator is ", c);
// this translates to
// if a is greater than b then(?) a - b else(:) b - a

/* comparison operator
    && logical and
    || logical or
    logical not - ! */