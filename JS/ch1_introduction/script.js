alert("Hello this is an alert msg");

console.log("Hey, it is a console")
console.log("Code is running")
console.log("we can see execution steps")

var a = prompt("Enter your name")
var isTrue = confirm("Are you sure you want to submit this form ")
if(isTrue){
    console.log("Form Submitted")
}

else{
    console.log("Form not submitted")
}
console.log("youe name is " +a)

document.title = "It is Js tutorial phase"

document.body.style.backgroundColor= "red"

// silly code to demonstrate output
document.write("Hello world!");
document.write("<p>How are <br/>" +
"<i>you</i>?</p>");