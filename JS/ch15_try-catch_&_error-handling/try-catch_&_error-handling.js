// Because of forgiving nature of js, it doesn't show error message.
// to stop this we use try catch error and throw error.

let a = prompt("Enter a number");

let b = prompt("Enter Second Number");

console.log("the sum is", a+b, "which is error as it is appended as string"); 
// it will not sum the number, instead it will add/append the number as string. eg: 4+7=47, which is generally error.

// to slove this 

let c = prompt("Enter a number");

let d = prompt("Enter another number");

let sum = parseInt(c) + parseInt (d);

console.log("The sum is", sum);

// solving NaN problem

let e = prompt("Enter a number");

let f = prompt("Enter another number");

if(isNaN(e) || isNaN(f)){
    throw SyntaxError("Do not add string value");
    // if we throw error then script will stop.
    // mdn reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
}

let sum1 = parseInt(e) + parseInt (f);

console.log("The sum is", sum1);

// steps to handle error
let m = prompt("Enter number:");
let n = prompt("Enter another number:");


if(isNaN(m) || isNaN(n)){
    throw SyntaxError("Do not add string value");
    // mdn reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
}

let sum2 = parseInt(m) + parseInt(n);

// to handle error
// try catch work synchronusly
try {
    
    console.log("the sum is", sum2*x);
} catch (error) {
    console.log("Erron found");
    
}
// finally clause
finally{
    // it will run anyway
    // it basically works efficiently on functions, as finally helps to run the code after return function.
    // interview question
    console.log("files are being closed and db connection is being closed")
}

let p = prompt("enter p value");

let q = prompt("enter q value:");

if(isNaN(p) || isNaN(q)){
    throw SyntaxError("Do not add string value");
    // mdn reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors
}

let sum3 = parseInt(m) + parseInt(n);

function main(){
    let x = 5;

    try{
        console.log("the sum is", sum3 * x);
        return true
    }
    catch(error){
        console.log("error detected");
        return false
    }
    finally{
        console.log("finally is printing this line in function")
    }
}

let xd = main()


