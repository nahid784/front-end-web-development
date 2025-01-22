alert("Hello World");   // it will show alert box

console.log("Hey It is a console..") // will show the text in console developer option

var a = prompt("Enter your number:");
var istrue = confirm("this is a confirmation prompt") // confirmation popup start
if(istrue){
  console.log("confirmation is true")
}
else{
  console.log("confirmation is false")
}
// confirmation popup end

console.log("your number is " + a);