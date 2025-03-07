console.log("Functions Tutorial");

// before function
console.log("Before function");
console.log("Hello Nahid, how are you?");
console.log("Hello Nahid, where are you going?");
console.log("Hello Nahid, how is your day?");
console.log("Hello Nahid, what are u doing?");

// after function
console.log("After function");
function nice(name) {
  console.log("Hello " + name + ", how are you?");
  console.log("Hello " + name + ", where are you going?");
  console.log("Hello " + name + ", how is your day?");
  console.log("Hello " + name + ", what are u doing?");
}
// function is used to avoid the repetition of code
nice("Nahid");
nice("Rahim");

// sum function
function sums(a, b) {
  console.log(a + b);
}
sums(4, 2);

function sum(a, b) {
  return a + b;
  // it is used to return the value of the function
}

result1 = sum(3, 2);
result2 = sum(4, 2);
result3 = sum(5, 2);

console.log("Sum of the numbers is: ", result1);
console.log("Sum of the numbers is: ", result2);
console.log("Sum of the numbers is: ", result3);

function optional(a, b, c = 4) {
  return a + b + c;
}

result4 = optional(5, 4);
result5 = optional(6, 2);
result6 = optional(6, 2, 2);

console.log("using optional parameter:", result4);
console.log("using optional parameter:", result5);
console.log("using optional parameter:", result6);


function multi(x, y){
  return (`The multiplication is: ${x * y}`);
}

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter 2nd number:"));

console.log(multi(num1, num2));
alert(multi(num1, num2));

// arrow function = resuing function
const func1 = (x) => {
  console.log("Hello", x);
};

func1("34");
func1("Nahid");
func1("Rahim");

// function to take user input and pre-defined value
function inputname(n_name) {
  return `Hello ${n_name}, How are you ?`;
}

let user_name = prompt("Enter you name !");
let pre_defined_name = "Pre-Defined Name";

console.log(inputname(user_name));
console.log(inputname(pre_defined_name));
alert(inputname(user_name));
alert(inputname(pre_defined_name));

// callback function

function num(n, callback){
  return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));