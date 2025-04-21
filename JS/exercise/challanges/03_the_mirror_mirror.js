// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let string1 = "abc";

let string2 = string1.split("").reverse().join("");

let string3 = string1 + "" + string2 ;

console.log(string3);
