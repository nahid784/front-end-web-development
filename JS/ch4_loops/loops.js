console.log("Loops Tutorial");

let a = 1;

// before loop
console.log("Before Loop");
console.log(a);
console.log(a + 1);
console.log(a + 2);

// for loop
for (let i = 0; i < 100; i++) {
    console.log(a+i);
    
}

// for in loop
// it is used for object
let obj = {
    name: "Nahid",
    role: "Developer",
    company: "Google"
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key, element)
        console.log(element)
        
    }
}

// for-off loop
// its used for array and string
for (const char of "Nahid") {
    console.log(char);  
} 