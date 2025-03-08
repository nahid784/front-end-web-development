/*  business name generator. example: canva website

create a business name generator by combining the list of adjectives and shop name and another word

Adjectives: Crazy, Amazing, Fire

Shop Name: Engine, Foods, Garments

Another word: Bros, limited, Hub

Cannot use arrays. can use functions and strings
*/

let rand = Math.random();
let first, second, third;
// 0 0.33 0.66 1
if (rand < 0.33) {
  first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}

rand = Math.random();
if (rand < 0.33) {
  second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "Foods";
} else {
  second = "Garments";
}

rand = Math.random();
if (rand < 0.33) {
  third = "Bros";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "limited";
} else {
  third = "Hub";
}

console.log(`${first} ${second} ${third}`);
