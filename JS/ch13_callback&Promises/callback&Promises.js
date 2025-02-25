// Assynchronus prog nature of JS
console.log("This is first line")
console.log("This is 2nd line")

setTimeout(() => {
    console.log("this is third line, but comes last because of Assynchronus nature of js")
}, 2000);

console.log("this is last line")

// CallBack Function
const loadScript = (src, callBack) => {
  let sc = document.createElement("script");
}

