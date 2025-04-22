// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function sumArr(arr){
    
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element < 0) {
            break;
        }
        else{
            sum += element;
        }
    }
    console.log(arr);
    console.log("Sum is ", sum);
}

sumArr([1, 2, 3,5, -5, 6,7]);
sumArr([1, 2, 3,5, 5, 6,-7]);
sumArr([1, 2, 3,5, 5, 6,7]);