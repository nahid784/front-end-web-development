// list of mouse events: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
let button = document.getElementById("btn");
// it took the button id from html

button.addEventListener("click", () => {
  alert("The button is clicked !");
  //   when the button is clicked, it will show this alert.
  document.querySelector(".box").innerHTML =
    "<b>Text has been changed after clicking the button</b>";
  // to select one element we use element query selector.
});

let button1 = document.getElementById("btn1");
button1.addEventListener("dblclick", () => {
  alert("The button is double clicked !");
  //   when the button is clicked, it will show this alert.
  document.querySelector(".box").innerHTML =
    "<b>Text has been changed again after double clicking the button</b>";
  // to select one element we use element selector.
});

button.addEventListener("contextmenu", () => {
  alert("Dont hack by clicking right click !");
});

document.addEventListener("keydown", (e) => {
  console.log(e);
  // key listner, button is recorded when any key is pressed

  console.log(e.key, e.keyCode);
});

// set Interval & timeout
// i want an element to run repeatedly for every 2 sec

function getrandom() {
  let val1 = Math.ceil(0 + Math.random() * 255);
  let val2 = Math.ceil(0 + Math.random() * 255);
  let val3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${val1}, ${val2}, ${val3})`;
}
let a = setInterval(() => {
  document.querySelector(".buttn").style.background = getrandom();
}, 3000);
// it will change bg color in every 3 second
console.log(a);

let b = setTimeout(() => {
  document.querySelector(".buttn1").style.background = getrandom();
}, 1000);
// it will change after certain amount of time (3sec)
console.log(b);
