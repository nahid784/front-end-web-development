// dom - Children, Parent & Sibling Nodes
console.log("Hello World !")

document.body   // <body>...</body>

document.body.childNodes    // NodeList(7) [text, div.container, text, table, text, script, text]

document.body.childNodes[0] // #text

document.body.childNodes[1] // <div class="container"></div>

document.body.childNodes[1].childNodes  // NodeList(15) [text, comment, text, div.box, text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text]

let cont = document.body.childNodes[1]

cont.firstChild // #text
cont.firstElementChild  // <div class="box">box1</div> which is element 
cont.lastElementChild.style.color = "red";  // text color will be red
cont.lastElementChild.style.backgroundColor = "green";

cont.lastElementChild.parentElement // <div class="container"></div>

document.body.firstElementChild // <div class="container"></div>

document.body.firstElementChild.childNodes  // NodeList(15) [text, comment, text, div.box, text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text] which are all nodes

document.body.firstElementChild.children    // HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box] which are only elements

document.body.firstElementChild.children[0]     // div.box

document.body.firstElementChild.children[1]     // <div class="box">box2</div>

document.body.firstElementChild.children[3].nextElementSibling  // <div class="box" style="color: red; background-color: green;">box5</div> which in box 5

document.body.firstElementChild.children[3].previousElementSibling  //<div class="box">box3</div> which is box 3

document.body.children[1].rows  // HTMLCollection(2) [tr, tr]