// calculate the factorial of a number using reduce and for loops 

let num = prompt("Enter a number: ");
let arr = [];
for (let i = num; i >= 1; i--) {
    arr.push(i);
}

const fact = (a, b) => {
    return a * b;
}

console.log("factorial of",num, "is:",arr.reduce(fact)); // 120