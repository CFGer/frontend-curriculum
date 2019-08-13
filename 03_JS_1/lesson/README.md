# Javascript: Part 1

## Learning outcomes

* What Javascript is and how we can run it
* The console and `console.log`
* Variables and basic data types

## Content

* What / Why / How
* Code Along:
* * Data Types: Primitives
* * Data Types: Arrays
* Challenge
* Recap
* Homework

## Intro

#### What

* JS language created in 1995 by Brad Eicher, designed to add a bit more interactivity to web-pages
* Named to coompete with Java (though not related in any way)
* Now one of the most popular languages in the world

#### Why

* Runs in the browser without any additional config
* Runs on the server (Node) so can do it all
* Very flexible and forgiving language

#### How

* Text editor / IDE and a browser
* Use HTML and JS together to run in the browser
* Or using a playground like JS bin or CodePen, or even the Dev Console

## Code Along

#### Data Types: Primitives and Variables

> introduce `console.log()`
> 
> explain that Variables are basically little boxes that can store data.
> Developers can then use that variable to pass around information when and where its needed
> 
> A primitive's value is either **TRUTHY** or **FALSY**: this is important as its a manin part of how we direct our code
>
> Basically, `if (something is TRUTHY) do A, else do B`

--- 

**NUMBERS**

Whole and decimal numbers for calculations
```javascript
// this is how we write a comment
// Numbers (integers and floats) are how we perform calculations
// =============== INTEGERS ===============

// "var" is the original variable and is what modern JS is transiled (converted) to
// But its almost never used in modern development anymore

var int1 = 5;

console.log(int1);

// const and let are now the preferred terms

// const is constant (can NOT be changed)
const int2 = 10;

int2 = 20; // ERROR...

// let is MUTABLE (CAN be changed)
let int3 = 15;


int3 = 20; // FINE: int3 === 20

console.log(int3);

// RULE OF THUMB: use let when a value needs to change (in a loop); const everywhere else

const sum = int2 + int3; // sum === 40

console.log(sum);

// =============== FLOATS ===============
// A 'floating decimal' number, or float, has a decimal point
const float1 = 12.3
const float2 = 145.9876795

const sumFloat = float1 + float2;

console.log(sumFloat)

```

---

**STRINGS**

For text

```javascript
// We used strings for text (letters, words, sentences etc)
// Can use single quotes
const string1 = 'Code';

console.log(string1); // Hello

// Or double quotes
const string2 = "First"; 

console.log(string2);

// Adding multiple strings together is called CONCATENATION
const cfg1 = string1 + ' ' + string2 + '!';

console.log(cfg); // Code First!

// We can also use backticks (bit more advanced but is neater)
const cfg2 = `${string1} ${string2}!`;

console.log(cfg2); // Code First!
```

**TYPE COERCION**

Coverting from one type to another

```javascript
// If we try to add two numbered strings together
const stringSum = '1' + '2';

console.log(stringSum); // '12'

// Which isn't very useful

// Thankfully, we can convert strings to numbers...
const parsedInteger = parseInt('1');
// OR
const parsedFloat = parsedFloat('20.33');

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
// Either true or false
// Critical for directing flow of code

const bool_true = true;
const bool_false = false;

let changeable_bool = true;

changeable_bool = false;
```

**null**

An empty value
```javascript
// null is a nothing value - an empty placeholder
const nothing = null;
```
---
#### RECAP - 5 mins
 
Make sure everyone is up to speed

---

#### Data Types: Arrays

**Arrays**

Lists
```javascript
// Arrays are simply lists of information
// They can hold mixed data types
const list = ['Jack', 30, true, null];

console.log(list[0]); // 'Jack'
console.log(list[3]); // null

list.push('Code First Girls');

console.log(list); // ['Jack', 30, true, null, 'Code First Girls']

// We can cycle through arrays in a number of ways

list.forEach(function(item){
  console.log(item);
})


```

**Nested Arrays**
```javascript
```

## Exercise



## Recap

You should now know:

* A bit about the history of Javascript and why its so popular now
* How to run a script
* About the console and `console.log`
* About variables and some basic data types

## Homework

- Basic

- Extended

## Resources