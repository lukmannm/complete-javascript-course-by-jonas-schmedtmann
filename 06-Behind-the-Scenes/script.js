'use strict';

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;

//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1995 && birthYear <= 2010) {
//       var z = true;
//       //   Creating New variable with same name as outer scopes variable
//       const firstName = 'Mugni';

//       // Reassigning outer scopes variable
//       output = 'New Output';

//       const str = `You are generation Z, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(z);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Lukman';
// calcAge(2001);
// printAge();
// console.log(age);

///////////////////////////////////////
// Hoisting and TDZ in Practice

// Variable
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Lukman';
// let job = 'Programmer';
// const year = 2001;

// Function
// console.log(addDecl(4, 2));
// console.log(addExpr(4, 2));
// console.log(addArrow(4, 2));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// EXAMPLE

// console.log(numProducts);
// !numProducts ? deleteShopCart() : console.log(numProducts);

// var numProducts = 20;

// function deleteShopCart() {
//   console.log('All products deleted!');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

///////////////////////////////////////
// The this Keyword in Practice
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2025 - birthYear);
//   console.log(this);
// };

// calcAge(2001);

// const calcAgeArrow = birthYear => {
//   console.log(2025 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(2001);

// const lukman = {
//   year: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2025 - this.year);
//   },
// };
// lukman.calcAge();

// const mugni = {
//   year: 2000,
// };

// mugni.calcAge = lukman.calcAge;
// mugni.calcAge();

// const a = lukman.calcAge;
// a();

//////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Mugni';

// const lukman = {
//   year: 2001,
//   calcAge: function () {
//     console.log(this);
//     console.log(2025 - this.year);

//     // Solution 1
//     // const that = this;
//     // const isGenerationZ = function () {
//     //   //   console.log(this);
//     //   //   console.log(this.year >= 1995 && this.year <= 2010);
//     //   console.log(that);
//     //   console.log(that.year >= 1995 && that.year <= 2010);
//     // };

//     // Solution 2
//     const isGenerationZ = () => {
//       console.log(this);
//       console.log(this.year >= 1995 && this.year <= 2010);
//     };
//     isGenerationZ();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// lukman.calcAge();
// lukman.greet();

// Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 4);
// addExpr(2, 3, 4, 5, 6, 7);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 3, 4, 5, 6, 6);

///////////////////////////////////////
// Primitives vs. Objects in Practice

// Primitive types
// let lastName = 'Hermawan';
// let oldLastName = lastName;
// lastName = 'Gunawan';
// console.log(lastName);
// console.log(oldLastName);

// Reference types
// const arima = {
//   firstName: 'Arima',
//   lastName: 'Kousei',
//   age: 30,
// };

// const merriedArima = arima;
// merriedArima.lastName = 'Uchiha';
// console.log('Before merriage', arima);
// console.log('After merriage', merriedArima);

// Copying objects
// const arima2 = {
//   firstName: 'Arima',
//   lastName: 'Kousei',
//   age: 30,
//   family: ['Sasuke', 'Itachi'],
// };

// const arimaCopy = Object.assign({}, arima2);
// arimaCopy.lastName = 'Uchiha';

// arimaCopy.family.push('Madara');
// arimaCopy.family.push('Sasui');

// console.log('Before merriage', arima2);
// console.log('After merriage', arimaCopy);
