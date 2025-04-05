// string is used to store text
// string is a sequence of characters
// string is a primitive data type
// string can be created using single quotes, double quotes, or backticks
// string is immutable, means we can't change the string once it is created

console.log("String Tutorial");

let a = "Nahid";
console.log(a);

// accessing characters in a string
console.log(a[0]); // N
console.log(a[1]); // a
console.log(a[5]); // undefined

console.log("length of the string is ", a.length); // 5

let r_name = "Nahid";
let friend = "Rahim";
console.log("My name is " + r_name + " and my friend's name is " + friend);

// template literals
console.log("After using template literals");
console.log(`My name is ${r_name} and my friend's name is ${friend}`);
console.log(`"Nahid"`);

// escape sequences can be used in strings
console.log("Hello\nWorld"); // new line
// its used very often in web development

let b = "Abir";
console.log(b.toUpperCase()); // ABIR
console.log(b.toLowerCase()); // abir

// slice method
console.log(b.slice(0, 3)); // Abi 0 inclusive, 3 exclusive
console.log(b.slice(1)); // bir 1 inclusive, rest of the string
console.log(b.replace("Ab", "Na")); // Nair, replace first occurance

// concatenation which means joining two or more strings
console.log(b.concat(a)); // AbirNahid
console.log(b.concat(a, "Sadman")); // AbirNahidSadman
// we can also use + operator for concatenation

// trim method for removing white spaces
let c = "     Nahid     ";
console.log(c); //      Nahid before and after Nahid there are white spaces
console.log(c.trim()); // Nahid

// string is immutable, means we can't change the string once it is created
console.log(b); // Abir as it is from the beginning concatenation doesn't change the original string

// using . operator to access properties and methods
