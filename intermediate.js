//Q1

// function ucFirst(str) {
//     const cap = str.charAt(0).toUpperCase() + str.slice(1);
//     return cap;
// }

// console.log(ucFirst("john")); //John

/* -------------------------------------------------------------------------------------------------------- */

//Q2

// function truncate(str,maxlength){
//     if(str.length>maxlength){
//         let newStr = str.slice(0,maxlength-1);
//         newStr+="…";
//         console.log(newStr);
//     }else{
//         // do nothing
//         console.log(str);
//     }
// }

// truncate("What I'd like to tell on this topic is:", 20);
// truncate("Hi everyone!", 20)

/* -------------------------------------------------------------------------------------------------------- */

//Q3
// let styles = ["Jazz","Blues"];
// console.log(styles);
// styles.push("Rock-n-Roll");
// console.log(styles);
// styles.splice(styles.length/2, styles.length/2, 'Classics');
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift("Rap","Reggae");
// console.log(styles);

/* -------------------------------------------------------------------------------------------------------- */

//Q4
// Translate border-left-width to borderLeftWidth
// Write the function camelize(str) that changes dash-separated words like
// “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.
// Examples:

// function camelize(str){
//     const arr = str.split("-");

//     for (let i = 1; i < arr.length; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
//     }

//     const str2 = arr.join("");
//     console.log(str2);
// }

// camelize("background-color"); // 'backgroundColor';
// camelize("list-style-image"); // 'listStyleImage';
// camelize("-webkit-transition"); // 'WebkitTransition';

/* -------------------------------------------------------------------------------------------------------- */

//Q5

// function Calculator() {
//     this.operands = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a + b
//     };

//     this.calculate = function (str) {
//         let split = str.split(' ');
//         let a = parseInt(split[0]);
//         let op = split[1];
//         let b = parseInt(split[2]);

//         //if cases are invalid
//         if (!this.operands[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.operands[op](a, b);
//     };

//     this.addMethod = function(opStr,func){
//         this.operands[opStr]=func;
//     }
// }

// let calc = new Calculator();
// console.log(calc.calculate("3 + 7")); // 10
// let powerCalc = new Calculator();
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// console.log(powerCalc.calculate("3 * 3")); //9
// console.log(powerCalc.calculate("3 / 3")); //1
// console.log(powerCalc.calculate("3 ** 3")); //27

/* -------------------------------------------------------------------------------------------------------- */

//Q6

// function unique(arr) {
//     const obj = {};
//     for (let i=0;i<arr.length;i++){
//         if(Object.hasOwn(obj, arr[i])){

//         }else{
//             obj[arr[i]]=i;
//         }
//     }

//     return Object.keys(obj);
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//  "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// console.log(unique(values)); // Hare, Krishna, :-O

/* -------------------------------------------------------------------------------------------------------- */

//Q7

// let map = new Map();
// map.set("name", "John");

// let keys = [...map.keys()]; //use spread operator
// keys.push("more");
// console.log(keys);

/* -------------------------------------------------------------------------------------------------------- */

//Q8 Store "unread" flags

let messages = [
 {text: "Hello", from: "John"},
 {text: "How goes?", from: "John"},
 {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// how to  store two message have been read

readMessages.add(messages[0]);
readMessages.add(messages[1]);  

// read the first message again

readMessages.add(messages[0]);

//Asking message 0 was read or not 
console.log(`text "${messages[0].text}!" from ${messages[0].from} - read status: ${readMessages.has(messages[0])}`); //True
console.log(`text "${messages[1].text}!" from ${messages[1].from} - read status: ${readMessages.has(messages[1])}`); //True
console.log(`text "${messages[2].text}!" from ${messages[2].from} - read status: ${readMessages.has(messages[2])}`); //False

messages.shift(); //message[1]

console.log(messages);


/* -------------------------------------------------------------------------------------------------------- */

//Q9 & Q10

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// let salaries1 = {};

// function sumSalaries(obj) {
//     let sum = 0;
//     for (const items in obj) {
//         sum += obj[items];
//     }
//     return sum;
// }

// console.log(sumSalaries(salaries)); // 650
// console.log(sumSalaries(salaries1)); // 0

// function topSalary(salaries) {
//     let topSal = 0;
//     let topName = null;


//     for (const key1 in salaries) {

//         if (topSal < salaries[key1]) {
//             topSal = salaries[key1];
//             topName = key1;
//         }
//     }

//     return topName;
// }

// console.log(topSalary(salaries));
// console.log(topSalary(salaries1));

/* -------------------------------------------------------------------------------------------------------- */

//Q11

// function getSecondsToday() {
//     const now = new Date();
//     let secondsNow = now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds() + now.getMilliseconds()/1000;
//     return secondsNow;
// }

// console.log(getSecondsToday());

/* -------------------------------------------------------------------------------------------------------- */

//Q12.Exclude backreferences

// Write replacer function to stringify everything, but
// remove properties that reference meetup:

// let room = {
//  number: 23
// };
// let meetup = {
//  title: "Conference",
//  occupiedBy: [{name: "John"}, {name: "Alice"}],
//  place: room
// };
// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;


// console.log( JSON.stringify(meetup, function replacer(key,value) {

//     if (key && value==meetup){
//         return undefined;
//     }else{
//         return value;
//     }

// }));

/* result should be:
{
 "title":"Conference",
 "occupiedBy":[{"name":"John"},{"name":"Alice"}],
 "place":{"number":23}
}
*/