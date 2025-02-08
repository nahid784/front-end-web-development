console.log("colors the boxes")

// let boxes = document.getElementsByClassName("box")

// 2nd method
let boxes = document.querySelector(".container").children

console.log(boxes)

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    // math.ceil is provide the next integer of the float value
    return `rgb(${val1}, ${val2}, ${val3})`
    
}

Array.from(boxes).forEach(e=>{ // make array using array, cause in html collection foreach cant be added
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
    console.log(e)
})



