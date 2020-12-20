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


////////////////////////////////////
//Operator Precendence
// const now = 2028;
// const ageLukman = now - 2001;
// const ageFatimah = now - 2005;

// console.log(now - 2001 > now - 2005);

// let x, y;
// x = y = 100 - 40 - 30; // x = y = 30, x = 30
// console.log(x, y);

// const averangeAge = (ageLukman + ageFatimah) / 2;
// console.log(ageLukman, ageFatimah, averangeAge);

// const firstName = 'Lukman';
// const job = 'Programmer';
// const birthYear = 2001;
// const year = 2035;

// const lukman = "Hi! I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(lukman);

// const lukmanNew = `Hi! I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(lukmanNew);

// console.log(`Just a regular string...`);


// console.log('String with \n\
// Multiple \n\
// line')
// console.log(`String with 
// Multiple 
// line`)


const age = 17;

if(age >= 18){
    console.log(`Tiara can start driving lisence!`)
} else {
    const yearLeft = 18 - age;
    console.log(`Tiara is too young. Wait another ${yearLeft} years :)`);
}

const birthYear = 2015;

let century;
if(birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}

console.log(century);

// Type Conversion
const birthYear = '2001';
console.log(Number(birthYear), birthYear);
console.log(Number(birthYear) + 19);

console.log(Number('Lukman'));
console.log(typeof NaN);

console.log(String(19), 19);
// Type Coercion
console.log("I'm " + 19 + ' years old.');
console.log('19' - '2' - 3);
console.log('23' + '3');
console.log('10' / '2');
console.log('23' > '20');

let n = '2' + 1;
n = n - 1; // 20
console.log(n)

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Lukman'));
console.log(Boolean({}));
console.log(Boolean(''));

const car = 0;
if(car){
    console.log("I have a Car!")
} else {
    console.log("I don't have a Car!")
}

let width;
if(width){
    console.log('Width is defined');
} else {
    console.log('Width is UNDEFINED!')
}

const age = 18;
if(age === 18) console.log('You just become an Adult! :D (strict)');
if(age == 18) console.log('You just become an Adult :D (loose)');

const favourite = Number(prompt("What's is your favourite Number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 19) {
    console.log('19 is amazing number')
} else if(favourite === 7){
    console.log('7 is also amazing number')
} else if(favourite === 9){
    console.log('9 is also amazing number')
} else {
    console.log('Number is not 19 or 7 or 9')
}

if(favourite !== 19) console.log('Why not 19?')
*/
const hasDriversLisence = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLisence && hasGoodVision);
console.log(hasDriversLisence || hasGoodVision);
console.log(!hasDriversLisence);

// if(hasDriversLisence && hasGoodVision) {
//     console.log('Tiara is able to drive!');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = false; // C
console.log(hasDriversLisence && hasGoodVision && !isTired);

if(hasDriversLisence && hasGoodVision && !isTired) {
    console.log('Tiara is able to drive!');
} else {
    console.log('Someone else should drive');
}