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
*/
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
