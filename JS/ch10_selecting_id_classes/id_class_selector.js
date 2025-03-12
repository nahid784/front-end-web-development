// targeting individual elements to change css class or id.

console.log("Nahid")

// targeting elements using class and index
let boxes = document.getElementsByClassName("box");
console.log(boxes);
boxes[2].style.backgroundColor = 'blue'
// using this only 2nd index or 3rd box will be effected

// targeting using id
document.getElementById("red").style.backgroundColor = 'red'
// this will target the element that have red id included, which target particular element

// query selector
document.querySelector(".box").style.backgroundColor = "green"
// it will select only the first element that will have the class name

// to select all elements of the class
console.log(document.querySelectorAll(".box"))  // for printing, in html collection we cannot add styling as it is html collection

// document.querySelectorAll(".box").forEach(e =>{
//     console.log(e)
//     e.style.backgroundColor = "yellow"
// }) // to print and add style one by one

// elements by tagname
document.getElementsByTagName("div")    // HTMLCollection(9) [div.container, div.box, div.box, div.box, div#red.box, div.box, div.box, div.box, div, red: div#red.box]
// it will return html collection

//matches
e = document.getElementsByTagName("div")
e[4].matches("#red")
// to check if the selector matches or not, means the specific selector will be targeted or not.

//closest
// to look for the nearest ancestor that matches the user input given css selector
e[4].closest("#red") // <div id="red" class="box" style="background-color: red;">Nahid Hasan 3</div>
e[4].closest(".container")  // <div class="container">..</div>

// contains - returns true if element b is inside of element a or element b is element a
document.querySelector(".container").contains(e[2]) // true

document.querySelector(".container").contains(document.querySelector("body"))   // false
// body is not in container

document.querySelector("body").contains(document.querySelector(".container"))   // true
// container is in body