function getcallbackData() {
  // it will get data from server

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}

console.log("loading modules");
console.log("normal callback");

console.log("Load Data");

let callback_data = getcallbackData();
console.log(callback_data);

console.log("Process data");
console.log("task 1");
// this is the funcation of asyncronus js as the other code didn't stop for data collection and process

// the function to stop other codes if data collection and process didn't completed is Async Await and alternative is promise

// promise method (callback based method)
function get_promise_data() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3500);
  });
}

console.log("loading modules");
console.log("Promise callback based");

console.log("Load Data");
console.log("other output will be showing after data processing");

let promise_data = get_promise_data();

promise_data.then((v) => {
  console.log("this is from promise method");
  console.log(promise_data);
  console.log("Process data");
  console.log("task 2");
});

// Async Await method more efficient, clean & better than promise - callback based

async function get_await_data() {
  // this function will run in background
  // this function simulate getting data from a server
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(455);
    }, 3000);
  });
}

async function main() {
  console.log("Loading Modules");

  console.log("Async Await Method");

  console.log("Load Data");

  let await_data = await get_await_data();
//   await can be used in async function, await stops function to run in background

  console.log(await_data);

  console.log("Process Data");

  console.log("task 3");
}

main();


// actual function
// comment task 3 function before running it
async function fetchapi(){
// fetch api
let x = await fetch('https://jsonplaceholder.typicode.com/todos/1') // returns promise or data collection promise
let fetch_data = await x.json() // parsing in json mode, using await for promises to settle (resolve means promise has settled successfully / reject means not settled)
// let fetch_data = await x.text() // parsing in text mode
console.log("api is ",fetch_data)
      // .then(response => response.json()) // 2 promises
      // .then(json => console.log(json))
      // // free fake rest api
      return 455

}

async function main() {
  console.log("Loading Modules");

  console.log("Async Await Method");

  console.log("Load Data");

  let fetch_api = await fetchapi();
//   await can be used in async function, await stops function to run in background

  console.log(fetch_api);

  console.log("Process Data");

  console.log("task 4 - fetch api");
}

main();

// example for post request method 
async function postData(url = "", data = {}){
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

postData("https://example.com/answer", {answer: 42}).then((data) =>{
  console.log(data);
});