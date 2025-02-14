// list of mouse events: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
let button = document.getElementById("btn") 
// it took the button id from html 

button.addEventListener("click",()=>{
      alert("The button is clicked !")
    //   when the button is clicked, it will show this alert.
    document.querySelector(".box").innerHTML = 
    "<b>Text has been changed after clicking the button</b>"
    // to select one element we use element selector.
})

let button1 = document.getElementById("btn1");
button1.addEventListener("dblclick",()=>{
      alert("The button is double clicked !")
    //   when the button is clicked, it will show this alert.
    document.querySelector(".box").innerHTML = 
    "<b>Text has been changed again after double clicking the button</b>"
    // to select one element we use element selector.
})