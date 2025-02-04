// dom - Children, Parent & Sibling Nodes
console.log("Hello World !")

let cont = document.body.childNodes[1]
cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "green";

document.body.firstElementChild.child
document.body.firstElementChild.childNodes  // NodeList(15) [text, comment, text, div.box, text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text] which are all nodes

document.body.firstElementChild.children    // HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box] which are only elements

document.body.firstElementChild.children[0]     // div.box