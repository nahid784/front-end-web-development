// Objects

// singleton created using contructor
// Object.create - this create object

// object literals - doesn't create singleton

const user = {
    name: "Nahid",
    "full name": "Nahid Hasan",
    age: "20",
    location: "Dhaka",
    email: "n@gmail.com",
    isLoggedIn: false,
    lasonline:["Monday", "Saturday"]
}

console.log(user.email);    // not recommended to use this
console.log(user["email"])  // recommended to use this
console.log(user["full name"]);

user.email = "emailchanged@gmail.com";  // value is overrided
console.log(user["email"])
// Object.freeze(user);
user.email = "value note chaged@gmail.com";
console.log(user["email"])

// interview task
// use symbol as a key
const mysym = Symbol("symbol");
const mysym1 = Symbol("symbol1");

const sym={
    type: "String",
    mysym: "symbol",
}

const sym1={
    type: "Actual Symbol",
    [mysym1]: "symbol"
}

console.log(sym.mysym); // now its string not symbol
console.log(typeof sym.mysym);
console.log("after turning it to symbol");
console.log(sym1[mysym1]);
console.log(typeof sym1[mysym1]);
console.log(sym);
console.log(sym1);

user.greeting = function(){
    console.log("hello user");
}

user.greeting2 = function(){
    console.log(`hello user ${this.name}`); // using string interpolation
    console.log(`hello user ${this["full name"]}`);    // using string interpolation
}

console.log(user.greeting)  // it will return fuction reference but not content

console.log(user.greeting());
console.log(user.greeting2());

// object part 2
const singleton = new Object()
const nonSingleton = {}

console.log(singleton);
console.log(nonSingleton);

const datingUser = {}

datingUser.id = "1243"
datingUser.name ="Abir"
datingUser.isLoggedIn = false;

console.log(datingUser);

// nested object
const regularUser = {
    email: "someone@gmail.com",
    fullName:{
        userfullname:{
            firstname: "Nahid",
            lastname: "Hasan"
        }
    }
}

console.log(regularUser.fullName);
console.log(regularUser.fullName.userfullname);

// combining object
const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

const obj3 = {obj1, obj2}
console.log(obj3);

const obj4 = Object.assign(obj1, obj2)
console.log(obj4);

const obj5 = Object.assign({}, obj1, obj2)
// {} is target, other act as source
console.log(obj5);

console.log("using spread\n")
const obj6 = {...obj1, ...obj2}
console.log(obj6);

// when info comes from database
const users = [
    {
        id:1,
        email: "datbase@gmail.com"
    },
    {
        id:2,
        email: "datbase2@gmail.com"
    },
    {
        id:3,
        email: "datbase3@gmail.com"
    },
    
]

users[1].email
console.log(datingUser);

console.log(Object.keys(datingUser));   // making the user keys info array
console.log(Object.values(datingUser));   // making the user values info array
console.log(Object.entries(datingUser));   // making the user entries info array

console.log("to check if any object has the property\n");
console.log(datingUser.hasOwnProperty('isLoggedIn'));
console.log(datingUser.hasOwnProperty('isLogged'));
console.log("\n")

// destructuring - works in react
const course = {
    coursename: "Js in bangla",
    price: "999",
    courseInstructor: "Nahid",
}

const {courseInstructor} = course;
console.log(courseInstructor);

const {coursename: Cname} = course;     // we can give another name also
console.log(Cname);


 
// DOM - Document object Model

// dom - document obj model is used to map entire html as map
// it is used to target elements using js
// interveiw question: bom vs dom

// comment before printing in vs code

// document.title = "Title have changed using js dom";
// console.log(document.title);
// console.log(document.body); // it is used to change any element of body or to change particular style

// document.body.style.backgroundColor = "green"; // it is an inline css
