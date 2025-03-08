// array in javascript
// arrays will be used in react for making numerous component for web development
// array is mutable or changable in javascript
// type of array is object in javascript

let arr = [1, 2, 3, 4, 5, 7];
console.log("array print:", arr); // print array
console.log("array length", arr.length); // length of array
console.log("first element of arary", arr[0]); // print first element of array
console.log("2nd element of arary", arr[1]); // print first element of array

// array is mutable or changable in javascript:
console.log("first element of array before change", arr[0]); // print first element of array
arr[0] = 10; // change first element of array
console.log("first element of array after change", arr[0]); // print first element of array

//array methods:

// toString() method
arr = [1, 2, 3, 4, 5, 7];
console.log("array print toString:", arr.toString()); // tostring() method is used to convert array to string

// join() method
arr = [1, 2, 3, 4, 5, 7];
console.log("array print join:", arr.join(" and ")); // join() method is used to join array elements with given separator

// pop() method
arr = [1, 2, 3, 4, 5, 6];
arr.pop(); // pop() method is used to remove last element of array
console.log("after using pop method", arr);

// push() method (important method)
arr = [1, 2, 3, 4, 5];
console.log("before using push method", arr);
arr.push(70); // push() method is used to add element at the end of array
console.log("after using push method", arr);
arr.push("nahid");
console.log("after using push method", arr);

// shift() method
arr = [1, 2, 3, 4, 5, 6];
arr.shift(); // shift() method is used to remove first element of array
console.log("after using shift method", arr);
arr.unshift(100); // unshift() method is used to add element at the beginning of array
console.log("after using unshift method", arr);

// delete() method
arr = [1, 2, 3, 4, 5, 6];
delete arr[5]; // delete() method is used to delete element of array
console.log("after using delete method", arr);
console.log("length", arr.length); // length of array is not changed after using delete method, interview question**
console.log(arr[5]); // undefined

// concat() method
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr4 = [11, 12, 13, 14, 15];
let arr3 = arr1.concat(arr2); // concat() method is used to join two arrays
let arr5 = arr1.concat(arr2, arr4); // concat() method is used to join three arrays
console.log("after using concat method", arr3);
console.log("after using concat method in three arrays", arr5);

//  sort() method
arr = [2, 4, 1, 7, 5, 6];
console.log("before using sort method", arr);
arr.sort(); // sort() method is used to sort array elements
console.log("after using sort method", arr);
// sorting takes optional compare function and it is used to sort array elements in ascending order

// splice() method
const numbers = [1, 2, 3, 4, 5];
console.log("before using splice method", numbers);
numbers.splice(1, 2); // splice() method is used to remove elements from array
// index 1 and 2 elements will be removed
console.log("after using splice method", numbers);
numbers.splice(1, 3, 222, 333); // splice() method is used to add elements at given index
console.log("after using splice method", numbers); // 222,333 will be added at index 1

// slice() method
let numbers1 = [1, 2, 3, 4];
console.log("before using slice method", numbers1);
let sliced1 = numbers1.slice(2); // slice() method is used to copy elements of array
console.log("sliced array from index 2", sliced1); // [3, 4]
let sliced2 = numbers1.slice(1, 3); // slice() method is used to copy elements of array
console.log("sliced array from index 1 to 3", sliced2); // [2, 3]
console.log("after using slice method", numbers1); // Original array remains unchanged

// array with loops
let a = [1, 2, 93, 5, 6, 88];
// classical for loop
for (let i = 0; i < a.length; i++) {
  const element = a[i];
  console.log(element);
}

// for each loop
a.forEach((value, index, arr) => {
  console.log(value, index, arr);
  // explanation: value is element of array, index is index of element, arr is array
});

// for in loop
// it is used for object
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  if (obj.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(key, element); // 1, 2, 3 will be printed
    // explaintion: key is key of object, element is value of key
  }
}

// for of loop
// it is directly used for array
for (const iterator of arr) {
  console.log(iterator);
  // explanation: iterator is element of array
}

for (const value of arr) {
  console.log("\n", value); // 1, 2, 3, 4, 5, 7
  // explanation: value is element of array
}

// map() method
let arr6 = [1, 2, 3, 4, 5];
let newarr = [];
for (let i = 0; i < arr6.length; i++) {
  newarr.push(arr6[i] * 2);
}
console.log("without using map method", newarr); // [2, 4, 6, 8, 10]

let arr7 = [1, 2, 3, 4, 5];
let newarr1 = arr7.map((value) => {
  return value * 3; // map() method is used to create new array with modified elements
});
console.log("after using map method", newarr1); // [2, 4, 6, 8, 10]

// filter() method used for ui and react development
let arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newarr2 = arr8.filter((value) => {
  return value > 5; // filter() method is used to filter elements
});
console.log("after using filter method", newarr2); // [6, 7, 8, 9]

//filter 2nd methood
const greaterthanseven = (e) => {
  if (e > 6) {
    return true;
  }
  return false;
};
console.log("after using filter 2nd method", arr8.filter(greaterthanseven)); // [8, 9]
// explanation: greaterthanseven is function and it is used to filter elements

// reduce() method
let arr9 = [1, 2, 3, 4, 5]; // 1*2*3*4*5 = 120
const red = (a, b) => {
  return a * b; // reduce() method is used to reduce array elements to single value
};
console.log("after using reduce method", arr9.reduce(red)); // 120

// array from() method
let arr10 = Array.from("nahid"); // from() method is used to create array from string
