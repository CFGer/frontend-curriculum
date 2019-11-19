# Javascript Objects and the DOM

## Content

Part 1 - Objects
Part 2 - The DOM

## Learning outcomes

By the end of this session, students should know:

- Know what an Object is and why we use them
- Know basic object syntax
- Know that the DOM is basically one big browser object, and by understanding Objects we’re closer to understanding how to interact with elements on the DOM
- Know how to use Javascript to interact with HTML elements and alter CSS

## Part 1 - Objects

- Objects vs Arrays
  - Arrays are accessed through numbers
  - Objects accessed through keys
- Anatomy of an object literal
  - Storing as variable should be familiar
  - Curly brackets
  - Properties
    - Keys (camelCase)
    - Colon
    - Value (can be anything except for empty)
- Accessing values
  - Dot notation
  - Bracket notation

## Code Along: Objects

- Send out starter code, which has 2 JS files: objects.js and theDOM.js
- Both JS files should be empty
- Ask the class which topic they would like to use to create an object: Person, Show, City, Animal etc (this walkthrough will use a Person, but feel free to experiment - just make sure to include each of the main data types as properties)

```javascript
var person = {
  name: "Jenny", // string
  age: 23, // integer
  friends: ["Susan", "Anna", "Maggie"], // array
  address: {
    // object
    number: 123,
    street: "Main St",
    city: "London"
  },
  sayHello: function() {
    // function
    console.log("Hello!!");
  }
};
```

```javascript
console.log(person.name); // 'Jenny'
console.log(person.age); // 23
console.log(person.friends[0]); // 'Susan'
console.log(person.address.city); // 'London'
person.sayHello(); // sayHello() console.logs already
```

### EXERCISE: 10 mins

Pick another topic (Show, Car, House, Movie, Book etc) and create another object that uses all the same data types as the previous example

EXAMPLE

```javascript
var book = {
  author: "George R. R. Martin",
  title: "A Game of Thrones",
  published: 1994,
  characters: ["Daenarys Targaryen", "John Snow"],
  publisher: {
    name: "Voyager",
    founded: 1989
  },
  adaptedToTV: true,
  catchphrase: function() {
    console.log("Valar Morghulis");
  }
};
```

## Part 2 - The DOM

- An Object-like representation of our HTML and CSS
- Accessible via Javascript

## Code Along: The DOM

- Wait until HTML and CSS Content Loaded before running contained Javascript
  - document is a keyword
  - .addEventListener is a built in method (more on this later)
  - the method takes 2 arguments:
    - name - "DOMContentLoaded" is invoked by the window when the page has finished loading
    - function - code to run when DOMContentLoaded is fired

```javascript
document.addEventListener("DOMContentLoaded", function() {
  // Your code here...
});
```

#### Getting Elements

```javascript
// GETTING ELEMENTS

var header1 = document.getElementsByTagName("h1");
// returns a HTML collection (like an Array)
console.log(header1);

// returns a single element
var header2 = document.getElementById("headerID");
console.log(header2);
```

#### Changing CSS

```javascript
// STYLING ELEMENTS

// Because it's a collection, we have to use [] to get the individual element
header1[0].style.color = "blue";
// ID returns a single element so we can access style directly
header2.style.color = "green";

header2.style.fontSize = "40px";
header2.style.background = "yellow";
header2.style.padding = "10px";
header2.style.border = "2px dashed blue";
```

#### Adding elements

```javascript
// CREATING ELEMENTS

// use the createElement method
var newParagraph = document.createElement("p");
// add some text
newParagraph.innerText = "I have just been created with Javascript!";
// append to the body
document.body.appendChild(newParagraph);
```

#### Events

- Events are arguably the most useful tool we have at our disposal with the DOM
- They give us all the interactivity we need to create flawless interactive sites
- There are dozens upon dozens of events, but we're only going to focus on a couple
- They all work the same way:
  - name
  - function

```javascript
header2.addEventListener("click", function(event) {
  // the 'event' is whatever the event is ('click') and returns the state of the page
  console.log(event);
  // the 'event.target' is whatever element is being interacted with (the h2)
  console.log(event.target);
  // Then we can change the properties
  event.target.style.color = "pink";
});
```

#### DOM Exercise

```javascript
var paragraph2 = document.createElement("p");
paragraph2.innerText = "Lorem ipsum";
paragraph2.style.fontSize = "18px";
paragraph2.style.fontFamily = "sans-serif";
paragraph2.style.border = "1px solid orange";
paragraph2.style.padding = "30px";

paragraph2.addEventListener("mouseenter", function(event) {
  event.target.style.color = "yellow";
});

document.body.appendChild(paragraph2);
```

## Homework

- Basic

Review your project ideas and determine what DOM events you think your page might need

If it has a form / newsletter, pay particular attention to object literals and the ‘submit’ event

