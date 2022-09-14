//Q1 & Q2

// function makeCounter() {
//     let count = 0;

//     function counter() {
//         count++;
//         return count;
//     }

//     counter.set = value => count = value;
//     counter.decrease = () => count=count-1;

//     return counter;
// }

// let counter = makeCounter();
// let counter2 = makeCounter();
// let counter3 = makeCounter();
// console.log(counter()); // 0
// console.log(counter()); // 1
// //different instance
// console.log(counter2()); // 0
// console.log(counter2()); // 1

//Q2

// console.log(counter.set(100)); //100
// console.log(counter()); //101
// console.log(counter.decrease()); //100
// console.log(counter.decrease()); //99
// console.log(counter.decrease()); //98

/* -------------------------------------------------------------------------------------------------------- */

//Q3

//1. Using setInterval

// function printNumbers(from,to){
//     let counter = from;
//     let timerId = setInterval(() => console.log(counter++), 1000);

//     let end = (to - from)*1000+1000;
//     setTimeout(() => { clearInterval(timerId); console.log(to); }, end);
// };

//printNumbers(3,6); //count 3->6

//2. Using nested setTimeout

// function printNumbers2(from, to) {
//     let counter = from;

//     setTimeout(function fun() {
//       console.log(counter);
//       if (counter < to) {
//         setTimeout(fun, 1000);
//       }
//       counter++;
//     }, 1000);
//   }

// printNumbers2(0,5); //count 0->5

//Q4
//npm install lodash
//npm i lodash.debounce

// import debounce from 'lodash.debounce';
// import _ from 'lodash';

// function log (input){
//     console.log(input);
// }

// let f = _.debounce(log, 1000);

// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 500); // debounced function waits 1000ms after the last call and then runs: alert("c")

//Q5

// import promptSync from "prompt-sync";
// const prompt = promptSync();

// function askPassword(ok, fail) {
//     let password = prompt("Password?: ");
//     if (password == "rockstar") {
//         ok();
//     }else {
//         fail();
//     };
// };

// let user = {
//     name: 'John',
//     login(result) {
//         console.log(this.name + (result ? ' logged in' : ' failed to log in ') );
//  }
// };

// askPassword(()=>{user.login(1)}, ()=>{user.login(0)}); // ?

//Q6 

// let head = {
//     glasses: 1
// };
// let table = {
//     pen: 3
// };
// let bed = {
//     sheet: 1,
//     pillow: 2
// };
// let pockets = {
//     money: 2000
// };

// //pockets → bed → table → head
// table.__proto__ = head;
// bed.__proto__ = table;
// pockets.__proto__ = bed;

// console.log(pockets.pen == 3);
// console.log(bed.glasses == 1);

// //benchmark

// console.time(pockets.glasses); 
// console.timeEnd(pockets.glasses); //slow 0.081ms

// console.time(head.glasses);
// console.timeEnd(head.glasses); //fast 0.004ms

//Q7

// function Obj(name) {
//     this.name = name;
// }


// let obj = new Obj('OBJECT1')
// console.log(obj.name);
// let obj2 = new obj.constructor('OBJECT2');
// console.log(obj2.name);

//Q8

// Function.prototype.defer = function (time) {
//     let f = this;
//     return function (...args) {
//         setTimeout(()=>f.apply(this,args), time);
//     }
// };

// function f(a, b) {
//     console.log(a + b);
// }

// f.defer(3000)(1, 2); // shows 3 after 3 second

//Q9

// let dictionary = Object.create(null, 
//     // your code to add dictionary.toString method 
//     {
//     toString: { // define toString property
//       value() { // the value is a function
//         return Object.keys(this).join();
//     }
//   }});


// // add some data

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop

// for(let key in dictionary) { 
//     console.log(key); // "apple", then "__proto__"
// }

// // your toString in action
// dictionary = dictionary.toString();

// console.log(dictionary); // "apple,__proto__"

//Q10

// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }

//     render() {
//       let date = new Date();

//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;

//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;

//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;

//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       console.log(output);
//     }

//     stop() {
//       clearInterval(this.timer);
//     }

//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
//   }

// /* class ExtendedClock extends Clock {
//     precision = 1000;
// } */

// class ExtendedClock extends Clock {

//     precision = 1000;

//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), this.precision);
//     }
//   };

// const clock = new ExtendedClock({template: 'h:m:s'});
// clock.precision = 2000; //2 seconds between ticks
// clock.start();

//Q11

// class FormatError extends SyntaxError {
//     constructor(name){
//         super(name);
//         this.name = 'FormatError';
//         //this.stack= 'stack';
//     }
// }

// let err = new FormatError("formatting error");
// console.log( err.message ); // formatting error
// console.log( err.name ); // FormatError
// console.log( err.stack ); // stack
// console.log( err instanceof FormatError ); // true
// console.log( err instanceof SyntaxError ); // true (because inherits from SyntaxError)

//Q12

// function delay(ms) {
//     const promise = new Promise(function(resolve) {
//        setTimeout(() => resolve(""),ms);
//        });

//     return promise// your code
// }

// delay(3000).then(() => console.log('runs after 3 seconds'));

//Q13

function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {


                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('no-such-user.json')
    .catch(alert); // Error: 404