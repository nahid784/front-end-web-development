console.log("colors the boxes")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

Array.from(boxes).forEach(e=>{ // make array using array, cause in html collection foreach cant be added
    console.log(e)
})

// 2nd method

let box = document.querySelector(."container").children