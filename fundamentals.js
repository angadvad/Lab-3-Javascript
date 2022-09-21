/*Q2 What are the results of these expressions?
"" + 1 + 0       //"10"
"" - 1 + 0        //-1
true + false      //1
6 / "3"           //2
"2" * "3"         //6
4 + 5 + "px"      //"9px"
"$" + 4 + 5       //"$45"
"4" - 2           //2
"4px" - 2         //NaN
" -9 " + 5        //" -9 5"
" -9 " - 5        //-14
null + 1          //1
undefined + 1     //Nan
" \t \n" - 2      //-2
*/

//Q3   
//inputs are stores as strings, you need to convert them to integers when you sum so the output is an integer not a sum of strings

// let a = parseInt(prompt("First number?", 1));
// let b = parseInt(prompt("Second number?", 2));

// alert(a + b); // was 12 now 3.

//Q4
// 5 > 4     //true
// "apple" > "pineapple" // false
// "2" > "12" //true
// undefined == null //true
// undefined === null//false
// null == "\n0\n"//false
// null === +"\n0\n"//false

//Q5
// if ("0") {       
//     console.log( 'Hello' );      //will show Hello because "0" is a string, "" would be false
// }
 
//Q6. Rewrite this if using the conditional operator '?'

// let a = 2;
// let b = 1;

// let result = a + b < 4 ? `${a+b} is Below 4` : `${a+b} is Equal to or Above 4`;

// console.log(result); //Below 4

//Q7

// const hello = (who) => console.log('Hello' + who );
// const delay = (func,mSeconds) => (...arg) => setTimeout(() => func.apply(null, arg), mSeconds);
// const delayHello = delay(hello, 3000);
// delayHello("World");

//Q8

// let schedule = {};

// function isEmpty(obj){
//     if (JSON.stringify(obj)=="{}"){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// console.log( isEmpty(schedule) ); // false

//Q9    LADDER OBJECT

// let ladder = {
//     step:0,
//     up(){
//         this.step++;
//         return this;
//     },
//     down(){
//         this.step--;
//         return this;
//     },
//     showStep: function(){   // shows the current step
//         console.log(this.step);
//     }
// }

// ladder.up().up().down().showStep(); //1

//Q10 ACCUMULATOR

// class Accumulator {

//     constructor(value){
//         this.value=value;
//     }
    
//     read(){
//         const input = prompt("Enter an integer-value please:");

//         if (isNaN(input)){
//             alert(`Your input: "${input}" is invalid`);
//             //input is invalid
//         }else{
//             this.value= this.value + parseInt(input);
//         }
//     }
// }

// let accumulator = new Accumulator(0); // initial value 1
// accumulator.read(); // adds the user-entered value
// accumulator.read(); // adds the user-entered value
// console.log(accumulator.value); // shows the sum of these values