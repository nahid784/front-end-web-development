/*  business name generator. example: canva website

create a business name generator by combining the list of adjectives and shop name and another word

Adjectives: Crazy, Amazing, Fire

Shop Name: Engine, Foods, Garments

Another word: Bros, limited, Hub

Cannot use arrays. can use functions and strings
*/

function getRandomAdjective() {
  const adjectives = "Crazy Amazing Fire";
  const adjectiveList = adjectives.split(" ");
  console.log("Adjective list length: ", adjectiveList.length); // Print the length of the adjective list
  return adjectiveList[Math.floor(Math.random() * adjectiveList.length)];
}

// Uncommented functions for completeness
function getRandomShopName() {
  const shopNames = "Engine Foods Garments";
  const shopNameList = shopNames.split(" ");
  return shopNameList[Math.floor(Math.random() * shopNameList.length)];
}

function getRandomAnotherWord() {
  const anotherWords = "Bros limited Hub";
  const anotherWordList = anotherWords.split(" ");
  return anotherWordList[Math.floor(Math.random() * anotherWordList.length)];
}

function generateBusinessName() {
  const adjective = getRandomAdjective();
  const shopName = getRandomShopName();
  const anotherWord = getRandomAnotherWord();
  return `${adjective} ${shopName} ${anotherWord}`;
}

console.log(generateBusinessName());
