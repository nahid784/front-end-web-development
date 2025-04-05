// dates

let mydate = new Date()
console.log(mydate);    // unreadable date object
console.log(mydate.toString()); // readable date object after converting in string
console.log(mydate.toDateString()); // normal date object
console.log(mydate.toLocaleString()); // another date format object
console.log(typeof mydate); // date is object

// to declare specific date

let declare_date = new Date(2024, 0, 25);   // month starts with 0 in js
let declare_date1 = new Date(2024, 2, 25);
console.log(declare_date);
console.log(declare_date1);
console.log(declare_date.toString());
console.log(declare_date1.toString());
console.log(declare_date.toDateString());
console.log(declare_date1.toDateString());

let declare_date2 = new Date(2024, 2, 25, 5, 3);
console.log(declare_date2.toLocaleString());

let declare_date3 = new Date("2024-01-14"); // YYYY-MM-DD in string month starts with 1
console.log(declare_date3.toLocaleString());
console.log("time value is in milliSecond",declare_date3.getTime());


let mytimestap = Date.now()
console.log(mytimestap);    // it will print in milliSecond
console.log(Math.floor(mytimestap/1000));    // it will print in milliSecond in shorter value

let new_date = new Date();
console.log("Month",new_date.getMonth() + 1);
console.log("Day",new_date.getDay ());
console.log("Year",new_date.getFullYear());

// for customizing date according to situation
new_date.toLocaleString('default', {
    // press ctrl + space to show all properties
    weekday: "long",
});
