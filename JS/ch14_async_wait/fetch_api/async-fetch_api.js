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
async function fetchapi(){
// fetch api
let x = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      // free fake rest api

}