/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 19 + 21 - 11);
////////////////////////////////////
// Values and Variables
console.log("Lukman");
console.log(19);

let firstName = "Thaira";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let lukman_thaira = "LT";
let $function = 20;

let person = "lukman";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Waiters";

let job1 = "coder";
let job2 = "waiters";

console.log(myCurrentJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 19);
// console.log(typeof 'Lukman');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2020;
console.log(typeof year);

console.log(typeof null); 

let age = 19;
age = 20;

const birthYear = 2001;
// birthYear = 2000;

var job = 'programmer';
job = 'waiters';

lastName = 'Nur Hakim';
console.log(lastName)

////////////////////////////////////
//Basic Operators
// Math Operators
const now = 2028;
const ageLukman = now - 2001;
const ageFatimah = now - 2005;
console.log(ageLukman, ageFatimah);

console.log(ageLukman * 2, ageLukman / 10, 2 ** 4);
// 2 ** 4 means 2 to the power of 4 = 2 x 2 x 2 x 2

const firstName = 'Lukman';
const lastName = 'Nur Hakim';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 20 + 7;
x += 10; // x = x + 10 = 37
x *= 4; // x = x * 4 = 148
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageLukman > ageFatimah); // >, <, >=, <=
console.log(ageLukman >= 20);

const isFullAge = ageFatimah >= 20;

console.log(now - 2001 > now - 2005);
*/

////////////////////////////////////
//Operator Precendence
const now = 2028;
const ageLukman = now - 2001;
const ageFatimah = now - 2005;

console.log(now - 2001 > now - 2005);

let x, y;
x = y = 100 - 40 - 30; // x = y = 30, x = 30
console.log(x, y);

const averangeAge = (ageLukman + ageFatimah) / 2;
console.log(ageLukman, ageFatimah, averangeAge);
