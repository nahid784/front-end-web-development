// Synchronus prog nature of JS
console.log("This is first line");
console.log("This is 2nd line");

// assynchronus prog nature of JS
setTimeout(() => {
  console.log(
    "this is third line, but comes last because of Assynchronus nature of js"
  );
}, 0);
// will run in last for assynchronus

setTimeout(() => {
  console.log(
    "this is 4th line, but comes last because of Assynchronus nature of js"
  );
}, 0);
// will run in last for assynchronu s

console.log("this is last line");

// CallBack Function
// normal callback
// const callBack = (arg) => {
//   console.log(arg);
// };
// const loadScript = (src, callBack) => {
//   let sc = document.createElement("script");
//   sc.src = src;
//   sc.onload = callBack("Nahid after loaded script");
//   document.head.append(sc);
// };

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callBack)

// pyramid of doom, callback hell
const fn = () =>{
  console.log("Callback Hell");
}

const callBack = (arg, fn) =>{
  console.log(arg);
  fn();
}

const loadScript = (src, callBack) =>{
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callBack("this is pyramid of doom", fn);
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callBack);