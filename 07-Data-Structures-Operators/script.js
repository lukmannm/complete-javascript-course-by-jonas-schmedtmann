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

/*
///////////////////////////////////////
// Working With Strings - Part 3

// Split and Join
console.log('a-very-nice-string'.split('-'));
console.log('Lukman Nur Hakim'.split(' '));

const [firstName, lastName] = 'Lukman Nurhakim'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalization = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  // namesUpper.push(n[0].toUpperCase() + n.slice(1));
  for (const n of names) namesUpper.push(n.replace(n[0], n[0].toUpperCase()));

  console.log(namesUpper.join(' '));
};

capitalization('lukman ahmad mugni yusuf dicky');

// Padding
const message = 'Go to gate 25!';
console.log(message.padStart(20, '-').padEnd(30, '-'));
console.log('lukman'.padStart(20, '-').padEnd(30, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const num = str.slice(-4);
  return num.padStart(str.length, '*');
};
console.log(maskCreditCard(6123323132836));
console.log(maskCreditCard(41233864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat
const message2 = 'Today we are going to work... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(15);
planesInLine(4);
*/
/*
///////////////////////////////////////
// Working With Strings - Part 2

const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'lUkmAN'; // Lukman
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails;
const email = 'lukman9bnurhakim9b@gmail.com';
const loginEmail = '  Lukman9bNurhakim9b@Gmail.com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing
const priceGB = '199,77£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 25. Boarding door 25!';
// console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('Airb'));
console.log(plane.includes('Beoing'));
console.log(plane.includes('neo'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Arirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board!');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
///////////////////////////////////////
// Working With Strings - Part 1
const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B767'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('a'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.lastIndexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and C are middle seats;
  const s = seat.slice(-1);
  if (s === 'B' || s === 'C') console.log('You got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('lukman'));
console.log(typeof new String('lukman'));

console.log(typeof new String('lukman').slice(1));
*/
/*
///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Python'],
  [4, 'JavaScript'],
  ['correct', 4],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);


// Conver object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 4;
console.log(answer);
// if (answer === question.get('correct')) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }
console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log([question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
*/
/*
///////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 24)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

console.log(rest.get('name'));
console.log(rest.get(false));
console.log(rest.get(2));

const time = 22;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(1);
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/
/*
// Sets
const orderSet = new Set(['Pizza', 'Pasta', 'Pizza', 'Risotto', 'Pasta']);
console.log(orderSet);
console.log(new Set('Lukman'));

console.log(orderSet.size);
console.log(orderSet.has('Nasi Goreng'));
console.log(orderSet.has('Pizza'));
console.log(orderSet.add('Nasi Goreng'));
console.log(orderSet.delete('Risotto'));
// console.log(orderSet.clear());
console.log(orderSet);

for (const order of orderSet) console.log(order);

// Example
const staffProduction = ['Strip', 'Strip', 'Spv', 'Security', 'Admin', 'Admin'];

// Change to array
const staffProduct = [...new Set(staffProduction)];
console.log(staffProduct);
console.log(staffProduct.length);

console.log(new Set(['A', 'B', 'A', 'B', 'C']).size);

console.log(new Set('lukmannurhakim').size);
*/
/*
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
*/
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
