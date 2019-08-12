# Javascript: Part 1

## Learning outcomes

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

**Numbers**
```javascript
// INTEGERS - whole numbers

// var is the original variable and is what modern JS is transiled (converted) to
// But its almost never used in modern development anymore
var num1 = 5;

// const and let are now the preferred terms

// const is constant (can NOT be changed)
const num2 = 10;

num2 = 20; // ERROR

// let is MUTABLE (CAN be changed)
let num3 = 15;

num3 = 20; // FINE: num3 === 20

// RULE OF THUMB: use let when a value needs to change (in a loop); const everywhere else

const sum = num2 + num3; // sum === 40

// FLOATS

```

**Strings**
```javascript
// Can use single quotes
const greeting = 'Hello';

// Or double quotes
const name = "Jack";

// Adding multiple strings together is called CONCATENATION
const sayHello = greeting + ' ' + name + '!';

// We can also use backticks (bit more advanced but is neater)
const sayHello2 = `${greeting} ${name}!`
```

**Booleans**
```javascript
// Either true or false
// Critical for directing flow of code

const bool_true = true;
const bool_false = false;

let changeable_bool = true;

changeable_bool = false;
```

**null**
```javascript
// null is a nothing value - an empty placeholder
const nothing = null;
```

> RECAP - 5 mins
> 
> Make sure everyone is up to speed

#### Data Types: Arrays

**Arrays**
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

## Recap

## Homework

- Basic

- Extended

## Resources