'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery({ starterIndex = 3, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declitious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//////////////////////
// // Nullish: null and undefined (NOT 0 or '')
restaurant.numGuess = 0;
const guess = restaurant.numGuess || 11;
console.log(guess);
const guessCorrect = restaurant.numGuess ?? 11;
console.log(guessCorrect);
//////////////////////
//// Short circuiting
// use ANY data type return ANY data, short-circuiting
// console.log('--- OR ---');
// console.log(2 || 'Hello');
// console.log('' || 'Lukman');
// console.log(true || 'Hello');
// console.log(undefined || null);
// console.log(undefined || '' || 'Hello' || 23 || null);

// restaurant.numGuess = 29;
// const guess1 = restaurant.numGuess ? restaurant.numGuess : 11;
// console.log(guess1);
// const guess2 = restaurant.numGuess || 11;
// console.log(guess2);
// console.log('--- AND ---');
// console.log(null && 2);
// console.log(2 && 'Lukman');
// console.log('Hi' && true && 23 && null && 0);

// if (restaurant.orderPizza)
//   restaurant.orderPizza('mushrooms', 'onion', 'cheese');

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion', 'cheese');
//////////////////////
//// Rest pattern and Parameters
// // 1) Destructuring
// // Spread, because on right side =
// const arr = [1, 2, ...[4, 5]];

// // Rest, because on left side =
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, others);
// const [pizza, pasta, ...other] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, pasta, other);

// // Object
// const { sat, ...weekends } = restaurant.openingHours;
// console.log(weekends);

// // 2) Function
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 4);
// add(2, 3, 4, 5, 6, 7);
// add(2, 3, 4, 5, 6, 7, 8, 9);

// const x = [2, 5, 6];
// add(...x);

// restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
// restaurant.orderPizza('Mushrooms');
//////////////////////
//// Spread Operator
// const arr = [5, 6, 7, 8];
// const newArr = [1, 2, 3, 4, ...arr];
// console.log(newArr);
// console.log(...arr);
// const newMenu = [...restaurant.mainMenu, 'Nasi Goreng'];
// console.log(newMenu);
// // Copy arrays
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets, NOT Object!
// const str = 'Lukman';
// const arrs = [...str, '', '.L'];
// console.log(arrs);
// console.log(...str);

// // Real-World
// // const ingredients = [
// //   prompt(`Let's make pasta! ingredients 1:`),
// //   prompt(`ingredients 2:`),
// //   prompt(`ingredients 3:`),
// // ];
// // restaurant.orderPasta(...ingredients);

// // Object
// const newRestaurant = { foundedIn: 1987, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Italian Restaurant';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
//////////////////////
//// Destructuring Object

// restaurant.orderDelivery({
//   time: '14.15',
//   address: 'Kp. Tegallega, 2',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Kp. Loji, 5',
// });
/*
const { name, openingHours, categories } = restaurant;
const {
  name: nameRestaurant,
  openingHours: openRestaurant,
  categories: categoriesRestaurant,
} = restaurant;

console.log(name, openingHours, categories);
console.log(nameRestaurant, openRestaurant, categoriesRestaurant);
// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating variables
let a = 201;
let b = 234;
const obj = { a: 5, b: 3, c: 23 };
({ a, b } = obj);
console.log(a, b);
// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
//////////////////////
//// Destructuring Arrays
const arr = [7, 8, 9];
const x = arr[0];
const y = arr[1];
const z = arr[2];

console.log(x, y, z);
console.log(arr);
// Use Destructuring Arrays
const [a, b, c] = arr;
console.log(a, b, c);

// If we use empty variable in Destrucuring array, that make jump to next index
const [j, , k] = arr;
console.log(j, k);

// let [main, secondary] = restaurant.categories;
// Jump to next Index

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching Variable
// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(3, 1);
console.log(starter, mainCourse);

// Nesteed Destructuring
const nesteed = [5, 6, [7, 8]];
const [one, , [two, three]] = nesteed;
console.log(one, two, three);

// Default Destructuring
const [p = 10, q = 10, r = 10] = [8, 5];
console.log(p, q, r);
*/
