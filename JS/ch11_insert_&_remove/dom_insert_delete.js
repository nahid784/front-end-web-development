// dom insert and delete

document.querySelector(".box")  // <div class="box">This is a box</div>

document.querySelector(".box").innerHTML    // 'This is a box'

document.querySelector(".container").innerHTML  // '\n        <div class="box">This is a box</div>\n    '

document.querySelector(".box").innerText    // 'This is a box'

document.querySelector(".container").innerText    // 'This is a box'


document.querySelector(".container").innerText
// 'This is a box\nThis is a box'