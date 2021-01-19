'use strict';
/*
///////////////////////////////////////
// Default Parameters
const bookings = [];
const createBooking = function (flightNum, numPassengers = 2, price = 188) {
  // ES5
  //   numPassengers =  numPassengers || 2 ;
  //   price = price || 188;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH234');
createBooking('LH234', 3, 800);
createBooking('LH234', 4);
createBooking('LH234', 7);

createBooking('LH234', undefined, 1000);

///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const lukman = {
  name: 'Lukman Nur Hakim',
  passport: 24739479142,
};

const checkIn = function (flightNum, passenger) {
  (flightNum = 'LH999'), (passenger.name = 'Mr. ' + passenger.name);

  if (passenger.passport === 24739479142) {
    alert('Check in');
  } else {
    alert('Wrong passwort!');
  }
};

checkIn(flight, lukman);
console.log(flight);
console.log(lukman);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};
newPassport(lukman);
checkIn(flight, lukman);

///////////////////////////////////////
// Functions Accepting Callback Functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('Hi!');
};
document.body.addEventListener('click', high5);
['Lukman', 'Marta', 'Mugni'].forEach(high5);

///////////////////////////////////////
// Functions Returning Functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Lukman');
greeterHey('Mugni');

greet('Hi')('Lukman');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hello')('Lukman');
*/
///////////////////////////////////////
// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flightNum: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(234, 'Lukman Nur Hakim');
lufthansa.book(523, 'Ahmad Mugni');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 24, 'Yusuf Jaelani');
console.log(eurowings);

book.call(lufthansa, 239, 'Sahrul Hermansyah');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 384, 'Halimah');

// Apply method
const flightData = [382, 'Marta Ardinata'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

///////////////////////////////////////
// The bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Tiara Damayanti');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Lukman Nur Hakim');
bookEW23('Marta Ardinata');
