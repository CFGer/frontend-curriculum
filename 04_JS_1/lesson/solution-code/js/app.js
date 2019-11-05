/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
// I'm a single line comment

/*
And I'm a multi line comment
I can comment out entire blocks of code
*/

// console.log() is an extremely  useful method of checking our output
// info and log are pretty identical, though log is more commonly used
console.log('hello');
console.info('hello');
// error can be used when something goes wrong
console.error('hello');

// Alert is a pop-up, built into the browser
// alert('Hello world');

// Prompt is similar, but takes user input
// prompt('Hi, what is your name?');

// VARIABLES
// var name = prompt('Hi, what is your name?');

// console.log can take lots of info as long as they're separated with commas
console.log('Users name is: ', name);

// The variable can be used in an alert
alert('Hi ' + name);

// STRING
// We used strings for text (letters, words, sentences etc)
// Can use single quotes
var string1 = 'Code';

console.log(string1); // Hello

// Or double quotes
var string2 = 'First';

console.log(string2);

// Adding multiple strings together is called CONCATENATION
var cfg1 = string1 + ' ' + string2 + '!';

console.log(cfg1); // Code First!

// We can also use backticks (bit more advanced but is neater)
var cfg2 = `${string1} ${string2}!`;

console.log(cfg2); // Code First!

// NUMBERS
// =============== INTEGERS ===============
var int1 = 5;

console.log(int1);

var sum = int1 + 35;

console.log(sum); // sum === 40

// =============== FLOATS ===============
// A 'floating decimal' number, or float, has a decimal point
var float1 = 12.3;
var float2 = 145.9876795;

var sumFloat = float1 + float2;

console.log(sumFloat); // 158.28767950000002

// TYPE COERCION
// If we try to add two numbered strings together
var stringSum = '1' + '2';

console.log(stringSum); // '12'

// Which isn't very useful

// Thankfully, we can convert strings to numbers...
var parsedInteger = parseInt('1');
// OR
var parsedFloat = parseFloat('20.33');

console.log(parsedInteger); // 1
console.log(typeof parsedInteger); // Number

console.log(parsedFloat); // 20.33
console.log(typeof parsedFloat); // Number

// BOOLEANS
// True or False

// Either true or false
// Critical for directing flow of code

var bool = true;
console.log(bool); // bool === true

bool = false; // value of bool is now false, like a lightswitch
console.log(bool); // bool === false

// NULL

// An empty value, normally used to represent an unknown number or object
// null is a nothing value - an empty placeholder
var nothing = null;
console.log(nothing); // null


// DATA TYPES EXERCISE

var tvShow = 'Friends';
var characters = 6;
var rating = 7.5;
var hasShowFinished = true;
// Concatenation
var sentence = tvShow + ' was a show about ' + characters + ' friends. Its ' + hasShowFinished + ' that the show ended, and has a rating od ' + rating;
// Interpolation
var sentence = `${tvShow} was a show about ${characters} friends. Its ${hasShowFinished} that the show ended, and has a rating of ${rating}`;

// CONTROL FLOW
// Directs the execution of code depending on the truthy-falsey value of code

if ('some truthy value') {
  // This will run if the value in the () is TRUTHY, not just true
  console.log('I will run');
} else {
  console.log('I will not run');
}

if (0) {
  console.log('I will not run');
} else {
  // This will run if the value in the () is FALSEY, not just false
  console.log('I will run');
}

// CONTROL FLOW EXERCISE

alert("I'm having a party, would you like to RSVP?");
var answer = prompt("Yes [y] or No [n]");

if (answer === 'y') {
  alert("Looking forward to it");
} else {
  alert("What a shame! Maybe next time");

// ARRAYS

// They can hold mixed data types
var list = ['Jack', 30, true, null];

// But they're mostly used for storing lists of the same data type
var fruit = ['apple', 'banana', 'pineapple', 'pears'];

console.log(list[0]); // 'Jack'
console.log(list[3]); // null

// Add an item to the end
list.push('Code First Girls');

console.log(list); // ['Jack', 30, true, null, 'Code First Girls']

// Remove an item from the start
list.shift();

// There are many more methods that you will have to research yourselves

// ARRAY EXERCISE

var countries = ["United Kingdom", "France"];
console.log(countries);
countries.push("Spain");
countries.shift();
countries.splice(1,0,"Germany");
var countryList = countries.join(',');
console.log(countryList);

