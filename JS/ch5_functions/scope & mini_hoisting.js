// scoping...

function one() {
    const username = "nahid";

    function two() {
        const userid = 212;
        console.log("under function two:", username);
        // it will be printed. as it is taken from one.
    }
    // console.log(userid);
    // it can't be printed, as it is from two.

    two()
}
// this is taking one type of icecrea. the smaller one can take icecream from bigger one. but the bigger one can't.
// code is executed line by line

one()

// console.log(username);
// it cant be printed also, as it is taken from one function.

// it works on if else also.

if (true){
    const user1name = "Hasan"
    if(user1name == "Hasan"){
        const web = " facebook"
        console.log(user1name + web);
    }
    // console.log(web);
    // it wont be printed.
}

// console.log(user1name);
// it wont be printed


// ******** hoisting.. ********

// 1st method of creating function.
addone(5);
// this will work also
function addone(num){
    return num + 1;
}
// addone(5);
// default one

// 2nd method of creating function
// addanother(5);
// for this: Cannot access 'addanother' before initialization
const addanother = function(num){
    return num + 2;
}
addanother(5);
// default one..


