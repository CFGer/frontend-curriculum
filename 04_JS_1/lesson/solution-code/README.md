# Javascript: Part 1

## Session Outline

- Learning outcomes
- Javascript overview
- Comments, the console, alerts and prompts
- Variables and Data types
- Conditionals
- Arrays
- Loops
- Recap
- Exercise / Homework

## Learning outcomes

- will be able to define Javascript and its role in front end development
- will know how to create and run a basic Javascript script
- will know what a variable is why we use them
- will know about alerts and prompts
- will know the basic data types
- will know how to use a basic if/else statement
- will know what an array is and why we use them
- will know what a basic loop looks like

## Javascript Overview

#### What

- JS language created in 1995 by Brad Eicher, designed to add a bit more interactivity to web-pages
- Designed to run in the browser (front end) but has been able to run on the server since Netscape (1996) and then Node (2009)
- Now one of the most popular languages in the world
- Named to compete with Java (though not related in any way)

## Code Along

#### Comments, the console, alerts and prompts

Comments in Javascript can be single or multiline

```javascript
// I'm a single line comment

/*
And I'm a multi line comment
I can comment out entire blocks of code
*/
```

Open the Chrome console (**cmd + alt + j**)

```javascript
// console.log() is an extremely  useful method of checking our output
// info and log are pretty identical, though log is more commonly used
console.log("hello");
console.info("hello");
// error can be used when something goes wrong
console.error("hello");
```

**alert()** and **prompt()** are ways of getting and displaying information to the user

```javascript
// Alert is a pop-up, built into the browser
alert("Hello world");

// Prompt is similar, but takes user input
prompt("Hi, what is your name?");
```

#### Variables

Variables (**var**) are like little parcels or information that act as a representation of data

```javascript
// VARIABLES
// var is the keyword
// The value on the right gets stored in the variable name on the  left
var name = prompt("Hi, what is your name?");

// We can use that information as many times as we like
// console.log can take lots of info as long as they're separated with commas
console.log("Users name is: ", name);

// The variable can be used in an alert
alert("Hi " + name);
```

---

#### Data Types: Primitives

**STRINGS**

Strings are simply characters _stringed together_ to create text

For text

```javascript
// We used strings for text (letters, words, sentences etc)
// Can use single quotes
var string1 = "Code";

console.log(string1); // 'Code'

// Or double quotes
var string2 = "First";

console.log(string2); // 'First'

// Adding multiple strings together is called CONCATENATION
var cfg1 = string1 + " " + string2 + "!";

console.log(cfg1); // Code First!

// We can also use backticks (bit more advanced but is neater)
var cfg2 = `${string1} ${string2}!`;

console.log(cfg2); // Code First!
```

**NUMBERS**

Whole and decimal numbers for calculations

```javascript
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
```

---

**TYPE COERCION**

Coverting from one type to another

```javascript
// If we try to add two numbered strings together
var stringSum = "1" + "2";

console.log(stringSum); // '12'

// Which isn't very useful

// Thankfully, we can convert strings to numbers...
var parsedInteger = parseInt("1");
// OR
var parsedFloat = parseFloat("20.33");

console.log(parsedInteger); // 1
console.log(typeof parsedInteger); // Number

console.log(parsedFloat); // 20.33
console.log(typeof parsedFloat); // Number
```

---

#### QUICK CHALLENGE

Have the students created a variable called 'greeting' which console.logs the following:

`Hi, my name is x, I'm y years old and I'm learning to code on CFG`

---

**Booleans**

True and False

```javascript
// True or False

// Either true or false
// Critical for directing flow of code

var bool = true;
console.log(bool); // bool === true

bool = false; // value of bool is now false, like a lightswitch
console.log(bool); // bool === false
```

**null**

An empty value

```javascript
// null is a nothing value - an empty placeholder
var nothing = null;
console.log(nothing); // null
```

**undefined**

An undefined value

```javascript
// useful when you know it will hold a value outside of scope (which will make more sense in the next lesson)
var notDefined;
console.log(notDefined); // undefined
```

---

#### RECAP - 5 mins

Make sure everyone is up to speed

---

#### Truthy / Falsy

All values or data types are eventually evaluated to be either **truthy** or **falsey**

| TRUTHY             |  FALSEY   |
| :----------------- | :-------: |
| true               |   false   |
| >0 or <0           |     0     |
| 'not empty string' |    ''     |
| []                 |   null    |
| {}                 | undefined |

---

#### Control Flow

Directs the execution of code depending on the truthy-falsey value of code

In its simplest form we can use an **if / else** statement

```javascript
if ("some truthy value") {
  // This will run if the value in the () is TRUTHY, not just true
  console.log("I will run");
} else {
  console.log("I will not run");
}
```

OR

```javascript
if (0) {
  console.log("I will not run");
} else {
  // This will run if the value in the () is FALSEY, not just false
  console.log("I will run");
}
```

---

#### Data Types: Arrays

**Arrays**

Arrays are simply unordered lists of information, accessible by numbers

They use square bracket notation for **setting** and **getting** data

```javascript
// They can hold mixed data types
var list = ["Jack", 30, true, null];

// But they're mostly used for storing lists of the same data type
var fruit = ["apple", "banana", "pineapple", "pears"];

console.log(list[0]); // 'Jack'
console.log(list[3]); // null

// Add an item to the end
list.push("Code First Girls");

console.log(list); // ['Jack', 30, true, null, 'Code First Girls']

// Remove an item from the start
list.shift();

// There are many more methods that you will have to research yourselves
```

#### Loops

```javascript
// There are several different types of loops, but we're only going to focus on 1: the FOR loop

// for(initialise; check condition; modifier if condition is true)
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// 0, 1, 2, ..., 9

// When using with arrays, we use the array length to get the index
for (var i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// 'apple', 'banana', 'pineapple', 'pears'
```

## Recap

You should now know:

- A bit about the history of Javascript and why its so popular now
- How to run a script
- About the console and `console.log`
- About variables and the basic data types
- About control flow and its importance in directing the flow of code
- Arrays and their usefulness in storing unordered data
- How to use a basic loop to repeat an action a certain number of time
  How to use a basic loop to cycle through an array

## Homework

- Basic
  - Putting it all together: follow the commented instructions to create a story
- Extended
  - Use a while loop and a switch statement (requires research)

## Resources
