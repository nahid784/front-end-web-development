console.log("colors the boxes")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

// 2nd method
// let box = document.querySelector(."container").children

Array.from(boxes).forEach(e=>{ // make array using array, cause in html collection foreach cant be added
    console.log(e)
})



