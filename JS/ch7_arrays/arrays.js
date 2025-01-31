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
console.log("array print toString:", arr.toString());   // tostring() method is used to convert array to string

// join() method
arr = [1, 2, 3, 4, 5, 7];
console.log("array print join:", arr.join(" and "));   // join() method is used to join array elements with given separator

// pop() method
arr = [1, 2, 3, 4, 5, 6];
arr.pop(); // pop() method is used to remove last element of array
console.log("after using pop method",arr)   

// push() method (important method)
arr = [1, 2, 3, 4, 5];
console.log("before using push method",arr)
arr.push(70); // push() method is used to add element at the end of array
console.log("after using push method",arr)
arr.push("nahid")
console.log("after using push method",arr)

// shift() method
arr = [1, 2, 3, 4, 5, 6];
arr.shift(); // shift() method is used to remove first element of array
console.log("after using shift method",arr)
arr.unshift(100); // unshift() method is used to add element at the beginning of array
console.log("after using unshift method",arr)

// delete() method
arr = [1, 2, 3, 4, 5, 6];
delete arr[5]; // delete() method is used to delete element of array
console.log("after using delete method",arr)
console.log("length",arr.length) // length of array is not changed after using delete method, interview question**
console.log(arr[5]) // undefined

// concat() method
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let arr4 = [11, 12, 13, 14, 15];
let arr3 = arr1.concat(arr2); // concat() method is used to join two arrays
let arr5 = arr1.concat(arr2, arr4); // concat() method is used to join three arrays
console.log("after using concat method",arr3)
console.log("after using concat method in three arrays",arr5)