console.log("Functions Tutorial");

// before function
console.log("Before function");
console.log("Hello Nahid, how are you?")
console.log("Hello Nahid, where are you going?")
console.log("Hello Nahid, how is your day?")
console.log("Hello Nahid, what are u doing?")

// after function
console.log("After function");
function nice(name) {
    console.log("Hello " + name + ", how are you?")
    console.log("Hello " + name + ", where are you going?")
    console.log("Hello " + name + ", how is your day?")
    console.log("Hello " + name + ", what are u doing?")
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


// arrow function
const func1 = (x)=>{
    console.log("Hello", x);
}

func1("34");
func1("Nahid");
func1("Rahim");