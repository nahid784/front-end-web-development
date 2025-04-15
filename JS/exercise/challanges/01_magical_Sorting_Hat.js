// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// method 01
let sName = ["Nahid", "Chowdhury", "Zakiul", "KaziAbirSadman"];

for (let i = 0; i < sName.length; i++) {
    const element = sName[i].length;
    const arrName = sName[i];

    if (element < 6) {
        console.log(`${arrName} goes to Gryffindor`);
    } else if (6 <= element && element < 8) {
        console.log(`${arrName} goes to Hufflepuff`);
    } else if (8 <= element && element < 12) {
        console.log(`${arrName} goes to Ravenclaw`);
    } else if (12 <= element) {
        console.log(`${arrName} goes to Slytherin`);
    }
}
