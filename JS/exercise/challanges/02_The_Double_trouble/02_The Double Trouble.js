// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function double() {
    let arr2 = [];
    let arr = [2, 2, 3, 4, 4, 5, 6];
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            continue;
        }
        else{
            arr2.push(arr[i] * 2);
        }
    }
    console.log(arr2);
}

double();