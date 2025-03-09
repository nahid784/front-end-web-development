// calculate the factorial of a number using reduce and for loops

// using reduct method
let a = 4;

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys());
  // this will return an array from 1 to n, which is a short method to create array
  console.log(arr.slice(1));
  let c = arr.slice(1).reduce((a, b) => {
    return a * b;
  });
  return c;
}

// using for loop
function facfor(number) {
  let fac = 1;
  for (let index = 1; index <= number; index++) {
    fac = fac * index;
  }
  return fac;
}
console.log("using reduce", factorial(a));
// (6) [1, 2, 3, 4, 5, 6]

console.log("using for loop", facfor(a));
