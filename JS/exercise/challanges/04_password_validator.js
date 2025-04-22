// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function passValid(pass) {

    if (pass.length >= 8 && /[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass)) {
        console.log("Pass generated");
    }

    else {
        console.log("Pass is not valid");
    }
}

passValid("Nahid34132");
passValid("nadsj783");
passValid("nahdsdds54543");

// 2nd method which checks all the rule 

console.log("\n")
function passValid2(pass2) {
    if (pass2.length >= 8) {
        if (/[A-Z]/.test(pass2)) {
            if (/[a-z]/.test(pass2)) {
                if (/[0-9]/.test(pass2)) {
                    console.log(`${pass2} is a valid Password`);
                }
                else {
                    console.log(`${pass2} is missing atleast one numerical value`);
                    return passValid2;
                }
            }
            else{
                console.log(`${pass2} is missing atleast one lower alphabet value`);
                return passValid2;
            }
        }
        else{
            console.log(`${pass2} is missing atleast one Upper alphabet value`);
            return passValid2;
        }
    }
    else{
        console.log(`${pass2} should be atleast 8 characters long.`);
        return passValid2;
    }
}

passValid2("Nahid");
passValid2("Nahid784");
passValid2("nad4566465");


