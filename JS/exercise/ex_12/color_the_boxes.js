console.log("colors the boxes");

// let boxes = document.getElementsByClassName("box")

// 2nd method
let boxes = document.querySelector(".container").children;

console.log(boxes);

function getRandomColor() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  // math.ceil provide the next integer of the float values
  return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach((e) => {
  // make array using array, cause in html collection foreach cant be added
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
  console.log(e);
});

// hex method

// var boxes = document.querySelectorAll(".box");

// for(var i = 0; i < boxes.length; i++){
//     var box = boxes[i];

//     // Generate random color (16777215 is white in Decimal)
//     var randomcColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//     // Generate random background  color
//     var randomBackgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);

//     // Assing random color and background
//     box.style.color = randomcColor;
//     box.style.backgroundColor = randomBackgroundColor;

//     // set content to show color code
//     box.textContent = randomcColor;

// }
