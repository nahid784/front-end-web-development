// event bubbling
// if child was clicked, then technically child container & Container also was clicked as container cointains childContainer and ChildContainer contains child div

// Bubbling
document.querySelector(".child").addEventListener("click", () => {
    alert("Child div was clicked !")
})

document.querySelector(".childContainer").addEventListener("click", () => {
    alert("Child Container div was clicked !")
})

document.querySelector(".container").addEventListener("click", () => {
    alert("Container div was clicked !")
})

// after stopping bubbling
document.querySelector(".child1").addEventListener("click", (e) =>  {
    e.stopPropagation()
    alert("Child div was clicked !")
})

document.querySelector(".childContainer1").addEventListener("click", (e /* we can take event object here */) => {
    e.stopPropagation   // to stop event bubbling
    alert("Child Container div was clicked !")
})

document.querySelector(".container1").addEventListener("click", () => {
    alert("Container div was clicked !")
})

// set Interval & timeout
// i want an element to run repeatedly for every 2 sec
function getrandom(){
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
setInterval(() => {
    document.querySelector(".childContainer").style.background = getrandom()
}, 3000);



