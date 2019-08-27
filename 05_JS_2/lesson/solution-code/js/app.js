/* eslint-disable no-unused-vars */
// Your code goes here

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

// SCOPE

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
