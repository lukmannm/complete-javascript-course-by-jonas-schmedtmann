'use strict';
const weekday = ['mor', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    game.scored;
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // ES6 Enchanced Object
  openingHours,
  orderDelivery({ starterIndex = 3, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declitious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);
// Entries Object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
/*
//////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// With
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mor', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exits');
console.log(restaurant.orderRissatto?.(0, 1) ?? 'Method does not exits');

// Arrays
const users = [{ name: 'lukman', email: 'lukman9bnurhakim9b@gmail.com' }];
// const users = [];
console.log(users[0]?.name || 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('User array empty');
*/
/*
//////////////////////
// Looping Arrays: the for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
/*
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
console.log('--- OR ---');
console.log(2 || 'Hello');
console.log('' || 'Lukman');
console.log(true || 'Hello');
console.log(undefined || null);
console.log(undefined || '' || 'Hello' || 23 || null);

restaurant.numGuess = 29;
const guess1 = restaurant.numGuess ? restaurant.numGuess : 11;
console.log(guess1);
const guess2 = restaurant.numGuess || 11;
console.log(guess2);
console.log('--- AND ---');
console.log(null && 2);
console.log(2 && 'Lukman');
console.log('Hi' && true && 23 && null && 0);

// if (restaurant.orderPizza)
//   restaurant.orderPizza('mushrooms', 'onion', 'cheese');

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'onion', 'cheese');

//////////////////////
//// Rest pattern and Parameters
// 1) Destructuring
// Spread, because on right side =
const arr = [1, 2, ...[4, 5]];

// Rest, because on left side =
const [a, b, ...others] = [1, 2, 3, 4, 5, 6];
console.log(a, b, others);
const [pizza, pasta, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, pasta, other);

// Object
const { sat, ...weekends } = restaurant.openingHours;
console.log(weekends);

// 2) Function
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 4);
add(2, 3, 4, 5, 6, 7);
add(2, 3, 4, 5, 6, 7, 8, 9);

const x = [2, 5, 6];
add(...x);

restaurant.orderPizza('Mushrooms', 'Onion', 'Olives', 'Spinach');
restaurant.orderPizza('Mushrooms');

////////////////////
// Spread Operator
const arr = [5, 6, 7, 8];
const newArr = [1, 2, 3, 4, ...arr];
console.log(newArr);
console.log(...arr);
const newMenu = [...restaurant.mainMenu, 'Nasi Goreng'];
console.log(newMenu);
// Copy arrays
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT Object!
const str = 'Lukman';
const arrs = [...str, '', '.L'];
console.log(arrs);
console.log(...str);

// Real-World
// const ingredients = [
//   prompt(`Let's make pasta! ingredients 1:`),
//   prompt(`ingredients 2:`),
//   prompt(`ingredients 3:`),
// ];
// restaurant.orderPasta(...ingredients);

// Object
const newRestaurant = { foundedIn: 1987, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Italian Restaurant';
console.log(restaurantCopy.name);
console.log(restaurant.name);

////////////////////
// Destructuring Object

restaurant.orderDelivery({
  time: '14.15',
  address: 'Kp. Tegallega, 2',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Kp. Loji, 5',
});
*/
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
