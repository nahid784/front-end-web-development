// Synchronus prog nature of JS
console.log("This is first line");
console.log("This is 2nd line");

// assynchronus prog nature of JS
setTimeout(() => {
  console.log(
    "this is third line, but comes last because of Assynchronus nature of js"
  );
}, 0);

setTimeout(() => {
  console.log(
    "this is 4th line, but comes last because of Assynchronus nature of js"
  );
}, 0);

console.log("this is last line");

// CallBack Function
const callBack = (arg) => {
  console.log(arg);
};
const loadScript = (src, callBack) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = callBack("Nahid after loaded script");
  document.head.append(sc);
};

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callBack)