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
};
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
