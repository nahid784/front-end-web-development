// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

let string1 = "abc";

let string2 = string1.split("").reverse().join(""); // string first coverted to array of characters using split then reversed using reverse and then joined the characters

let string3 = string1 + "" + string2 ;  // joining the both string 

console.log(string3);
