// targeting individual elements to change css class or id.

console.log("Nahid")

// targeting elements using class and index
let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = 'blue'
// using this only 2nd index or 3rd box will be effected

// targeting using id
document.getElementById("red").style.backgroundColor = 'red'
// this will target the element that have red id included