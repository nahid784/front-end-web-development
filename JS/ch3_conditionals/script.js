console.log("It is a conditional if else of js")

let age = 17;
let grace = 2;

// Arithmetic Operators
console.log("Summation is ", age + grace);
console.log("Substract is ", age - grace);
console.log("Multiplication is ", age * grace);
console.log("Division is ", age / grace);
console.log("Power of",age,"^",grace, "is", age ** grace);
console.log("Remainder or Modulus is ", age % grace) ;

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
    console.log("you cant drive")
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