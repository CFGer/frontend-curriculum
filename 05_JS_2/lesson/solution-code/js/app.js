/* eslint-disable no-unused-vars */


// Your code goes here

// BASIC FUNCTIONS
function helloWorld() {
  console.log('Hello world');
}

helloWorld();

// 'Hello world'

function returnHello() {
  return 'Hello world';
}

var greeting = returnHello();

console.log(greeting);

// 'Hello world'

// Mini-exercise: functions

function myName(){
  return prompt("What's your name?");
}

var name = myName();

console.log(name);

// ARGUMENTS

function sum(number1, number2) {
  return number1 + number2;
}

var sumAnswer1 = sum(2, 4);
console.log(sumAnswer1); // 6

var sumAnswer2 = sum(12, 3);
console.log(sumAnswer2); // 15

// We can even pass variables as arguments when we invoke the function
var sumAnswer3 = sum(sumAnswer1, sumAnswer2);
console.log(sumAnswer3); // 21

// Mini-exercise: using arguments

function movieDetails(title, released) {
  return `${title} was released in ${released}`
  // OR
  return title + ' was released in ' + released
}

var movie1 = movieDetails('The Matrix', 1999);

console.log(movie1)

// ADDING LOGIC

function verifyAge(name, age) {
  if (age > 18) {
    return name + ' is old enough to drive';
  } else {
    return name + ' has to be 18 to drive';
  }
}

var John = verifyAge('John', 16);
console.log(John); // 'John has to be 18 to drive'
var Jane = verifyAge('Jane', 20);
console.log(Jane); // 'Jane is old enough to drive'

// Mini-exercise: function logic

function shoppingCart(item, cost, balance) {
  if (cost < balance) {
    return `You can afford the ${item}`;
  } else {
    return `The ${item} is out of your budget`;
  }
}

var item1 = shoppingCart('tshirt', 20, 50);
var item2 = shoppingCart('dress', 35, 30);

// SCOPE (if there's time)

var freePerson = 'Lucy';

function outerFence() {
  var prisoner1 = 'Tim';
  console.log(freePerson);

  function innerFence() {
    var prisoner2 = 'Barry';
    console.log(freePerson);
    console.log(prisoner1);
  }

  console.log(prisoner2);
}

outerFence();
innerFence();

// console.log(prisoner1);
