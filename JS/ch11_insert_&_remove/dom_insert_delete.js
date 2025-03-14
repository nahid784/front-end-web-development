// dom insert and delete
// document.designMode = "on", to design any website

document.querySelector(".box"); // <div class="box">This is a box</div>

document.querySelector(".box").innerHTML; // 'This is a box'

document.querySelector(".container").innerHTML; // '\n        <div class="box">This is a box</div>\n    '

document.querySelector(".box").innerText; // 'This is a box'

document.querySelector(".container").innerText; // 'This is a box'

document.querySelector(".container").innerText;
// 'This is a box\nThis is a box'

document.querySelector(".container").outerHTML;
// <div class="container">\n        <div class="box">This is a box</div>\n        <div class="box">This is a box</div>\n
// this container also be shown using this

document.querySelector(".container").tagName;
// 'DIV'

document.querySelector(".container").nodeName;
// 'DIV'
// tagname is applicable for element and nodename is applicable for any node

document.querySelector(".container").textContent;
// '\n        This is a box\n        This is a box\n

document.querySelector(".container").hidden;
// false

// document.querySelector(".container").hidden = true
// true
// container will be hidden

document.querySelector(".box").innerHTML = "Hey the line has changed";
// it will select the first element to change

document.querySelector(".box").hasAttribute("style");
// false

document.querySelector(".box1").hasAttribute("style");
// true, it means it has style in it.

document.querySelector(".box1").getAttribute("style");
// 'display: flex;', it shows which attribute it contains

document.querySelector(".box1").setAttribute("style", "display: inline");
// it will set the attribute according to the command

document.querySelector(".box1").attributes;
// NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}, it will show all the attributes

document.querySelector(".box1").removeAttribute("style");
// style will be removed

document.designMode = "on";
// any website can be designed on the page.

document.querySelector(".box").dataset;
// DOMStringMap {createdby: 'nahid'}, will show dataset

// insertion method
let div = document.createElement("div");
div.innerHTML = "it is inserted by using <b>js</b>";
div.setAttribute("class", "created");
document.querySelector(".container").append(div);
// the element will be added at the end for using append

document.querySelector(".container").before(div);
// the element will be added before element for using before

// insert adjacent html
let cont = document.querySelector(".container");
cont.insertAdjacentHTML("afterend", "i am inserted using adjacent");
// it will add after the element

document.querySelector(".container").classList;
// DOMTokenList ['container', value: 'container']

document.querySelector(".container").className;
//'container'

document.querySelector(".container").classList.add("nahid");
// class will be added, one class cant be added multiple times

document.querySelector(".container").classList.toggle("nahid");
// it is like on off switch
