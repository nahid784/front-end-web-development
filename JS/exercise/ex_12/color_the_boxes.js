console.log("colors the boxes")

// let boxes = document.getElementsByClassName("box")

// 2nd method
let boxes = document.querySelector(".container").children

console.log(boxes)

function getRandomColor(){
    let val1 = 233;
    let val2 = 125;
    let val3 = 111;
    return `rgb(${val1}, ${val2}, ${val3})`
    
}

Array.from(boxes).forEach(e=>{ // make array using array, cause in html collection foreach cant be added
    e.style.backgroundColor = getRandomColor()
    console.log(e)
})



