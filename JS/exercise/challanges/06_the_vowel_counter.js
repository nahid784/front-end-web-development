// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


function vowelCount(string){


let num = 0;

for (let index = 0; index < string.length; index++) {
    let element = string[index];
    element = element.toLowerCase();
    if (element === "a" || element === "e" || element === "i" || element === "o" || element === "u"){
        num++;
    } 
        
}

console.log("Total vowels are:", num)
}

vowelCount("Nahidhasan");
vowelCount("SadmanKhan")
vowelCount("LazIM RUKU")