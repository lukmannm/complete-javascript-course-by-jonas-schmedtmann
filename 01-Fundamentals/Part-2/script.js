'use strict';
/*
let hasDriversLicensi = false;
const passTest = true;

if(passTest) hasDriversLicensi = true;
if(hasDriversLicensi) console.log('I can Drive XD');

// const interface = 'Audio';
// const private = 123;

///////////////////// 
// Function
function logger(){
    console.log('My name is Lukman');
}

//  calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(manggos, oranges){
    const juice = `Juice with ${manggos} manggo and ${oranges} orange`;
    return juice;
}

const juiceManggo = fruitProcessor(2, 3);
console.log(juiceManggo);
const juiceOrange = fruitProcessor(3, 6);
console.log(juiceOrange);

const num = Number('19');

// function declaration
function calcAge1(birthYear){
    return 2025 - birthYear;
}
const age1 = calcAge1(2001);

// function expression
const calcAge2 = function(birthYear){
    return 2024 - birthYear;
}
const age2 = calcAge2(2001);

console.log(age1,age2);

// arrow function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2001);
console.log(age3);

const yearUntilMarriage = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const merriage = 27 - age;
    return `${firstName} merriage in ${merriage}`;
}
console.log(yearUntilMarriage(2001, 'Lukman'));
console.log(yearUntilMarriage(2005, 'Fatimah'));

// calling function
function cutFruitPieces(fruit){
    return fruit * 5
}
function fruitProcessor(manggos, oranges){
    const manggoPieces = cutFruitPieces(manggos);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${manggoPieces} piece of manggo and ${orangePieces} piece of orange`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function(birthYear){
    return 2025 - birthYear;
}
const yearUntilMarriage = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const merriage = 27 - age;
    if(merriage > 0){
        console.log(`${firstName} merriage in ${merriage} years.`);
        return merriage;
    } else {
        console.log(`${firstName} has already merriage.`);
        return -1;
    }
}

console.log(yearUntilMarriage(2001, 'Lukman'));
console.log(yearUntilMarriage(1994, 'Rahmat'));

//// Array
const friend1 = 'Mugni';
const friend2 = 'Dicki';
const friend3 = 'Rahmat';

const friends = ['Mugni', 'Dicki', 'Rahmat'];
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

const y = new Array(2000, 2001, 2003);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Martha';
console.log(friends);

const firstName = 'Lukman';
const lukman = [firstName, 'Nur Hakim', 2027 - 2001, friends];
console.log(lukman);
console.log(lukman.lenth);

// Exercise
const calcAge = function(birthYear){
    return 2027 - birthYear;
}
const year = [1999, 2000, 2003, 2005, 2009];

console.log(calcAge(year[0]));
console.log(calcAge(year[2]));
console.log(calcAge(year[year.length - 1]));

const years = new Array(calcAge(year[0]), calcAge(year[2]), calcAge(year[year.length - 1]));
// const years = [calcAge(year[0]), calcAge(year[2]), calcAge(year[year.length - 1])];
console.log(years);

const friends = ['Mugni', 'Dicki', 'Rahmat'];

// Add Array
const newLength = friends.push('Martha');
console.log(friends);
console.log(newLength);

friends.unshift('Yusuf');
console.log(friends);

// Remove Array
friends.pop(); // last
const pooped = friends.pop();
console.log(pooped);
console.log(friends);

friends.shift(); // beginning
console.log(friends);

friends.push(23);
console.log(friends.indexOf('Mugni'));
console.log(friends.indexOf('Tiara'));
console.log(friends.includes(23));

if(friends.includes('Mugni')){
    console.log('You have a friend called Mugni.');
}

const lukmanArray = [
    'Lukman',
    'Nur Hakim',
    2025 - 2001,
    'Programmer',
    ['Mugni', 'Dicki', 'Rahmat']
];

//// Object
const lukman = {
    firstName: 'Lukman',
    lastName: 'Nur Hakim',
    age: 2025 - 2001,
    job: 'Programmer',
    friends: ['Mugni', 'Dicki', 'Rahmat']
};

console.log(lukman);
console.log(lukman.firstName);
console.log(lukman['firstName']);

const nameKey = 'Name';
console.log(lukman['first' + nameKey]);
console.log(lukman['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Lukman? Choose betwwen firstName, lastName, age, job, friends.');
if(lukman[interestedIn]){
    console.log(lukman[interestedIn]);
} else {
    console.log('Wrong!! Choose between firstName, lastName, age, job, friends.')
}

lukman.location = 'Indonesia';
lukman['instagram'] = '@luckymn_';
console.log(lukman);

// Challenge
// Lukman has 3 friends and his best friend is called mugni


console.log(`${lukman.firstName} has ${lukman.friends.length} friends and his best friend is called ${lukman.friends[0]}`);


const lukman = {
    firstName: 'Lukman',
    lastName: 'Nur Hakim',
    birthYear: 2001,
    job: 'Programmer',
    friends: ['Mugni', 'Dicki', 'Rahmat'],
    hadDriversLicense: true,

    // calcAge: function(){
    //     // console.log(this);
    //     return 2025 - this.birthYear;
    // }

    calcAge: function(){
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he has ${this.hadDriversLicense === true ? 'a' : 'no'} driver's license`
    }
};
// console.log(lukman.calcAge(2001));
// console.log(lukman['calcAge'](2001));

console.log(lukman.calcAge());
console.log(lukman.age);
console.log(lukman.age);
console.log(lukman.age);

// Challenge 
// "Lukman is a 25 years old programming, and he has a driver's license"
console.log(lukman.getSummary());

//// Loops

// for loop keeps running while condition is True
for(let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetition ${rep}`)
}

const lukman = [
    'Lukman',
    'Nur Hakim',
    2025 - 2001,
    'Programmer',
    ['Mugni', 'Dicki', 'Rahmat']
];

const types = [];

for(let i = 0; i < lukman.length; i++){
    console.log(lukman[i], typeof lukman[i]);

    // types[i] = typeof lukman[i];
    types.push(typeof lukman[i])
}

console.log(types);

const years = [2001, 2004, 2005, 2008];
const ages = [];

for(let i = 0; i < years.length; i++){
    ages.push(2025 - years[i]);
}

console.log(ages);

// continue and break
console.log('---ONLY STRING---');
for(let i = 0; i < lukman.length; i++){
    if(typeof lukman[i] !== 'string') continue;

    console.log(lukman[i], typeof lukman[i]);
}

console.log('---ONLY NUMBER---');
for(let i = 0; i < lukman.length; i++){
    if(typeof lukman[i] === 'number') break;

    console.log(lukman[i], typeof lukman[i]);
}

const lukman = [
    'Lukman',
    'Nur Hakim',
    2025 - 2001,
    'Programmer',
    ['Mugni', 'Dicki', 'Rahmat']
];

for(let i = lukman.length - 1; i >= 0; i--){
    console.log(lukman[i]);
}

for(let exercise = 1; exercise < 4; exercise++){
    console.log(`---------EXERCISE STARTING`);
    for(let rep = 1; rep < 6; rep++){
        console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
    }
}
*/
// While
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetition ${rep}`);
// }

// let rep = 1;
// while (rep <= 10){
//     console.log(`While: Lifting weights reptition ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}