//SHALLOW CLONE EXAMPLE

// const obj = {
//     hi: "hi",
//     bye: "bye",
//     arr: [1, 2, 6, 3],
//     obj2: {
//         hi2:"hi"
//     }
// }
// const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
// clone.hi = "g'day";
// clone.obj2.hi2="g'day";
// console.log(clone);
// console.log("-----------------");
// console.log(obj);

//Exercises
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

import fetch from 'node-fetch';


// Exercise 1:
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
// let countries;
// function printCountry(){
//     fetch(countriesAPI, {
//         method:"GET"
//     })
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         initialize(data);
//     })

//     function initialize(countriesData){
//         countries=countriesData;
//         console.log(`Country Name: ${countries[100].name}\nCapital: ${countries[100].capital}\nLanguages: ${countries[100].languages[0].name}`);
//         console.log(`Population=: ${countries[100].population}\nArea=: ${countries[100].area}`);
//         // console.log("--------------");
//         // console.log(Object.keys(countries[100]));
//     }

// }

// printCountry();


// Exercise 2:
// Print out all the cat names in to catNames variable.

// function printCatNames(){
//     fetch(catsAPI, {
//         method:"GET"
//     })
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         initialize(data);
//     })

//     function initialize(cats){

//         for (let i=0;i<cats.length;i++){
//             console.log(cats[i].name);
//         }
//     }
// }

// printCatNames();

// Excercise 3: 
// Read the cats api and find the average weight of cat in metric unit.


// function avgCatWeight(){
//     fetch(catsAPI, {
//         method:"GET"
//     })
//     .then(function(res){
//         return res.json();
//     })
//     .then(function(data){
//         initialize(data);
//     })

//     function initialize(cats){
//         let catsWeightArray=[];
//         for(let i=0;i<cats.length;i++){
//             catsWeightArray[i]=parseInt(cats[i].weight.metric);
//         }
        
//         const average = catsWeightArray.reduce((avg, value, _, {
//             length
//           }) => {
//             return avg + (value / length);
//           }, 0);

//           console.log(`Average Cat Weight is: ${average.toPrecision(2)} kgs`);
//     }
// }

// avgCatWeight();

// Read the countries api and find out the 10 largest countries

function largestCountries(){
    fetch(countriesAPI, {
        method:"GET"
    })
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        initialize(data);
    })

    function initialize(countries){
        
    }

}

printCountry();

// Read the countries api and count total number of languages in the world used as officials.