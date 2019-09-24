/* eslint-disable no-unused-vars */

var person = {
  name: 'Jenny', // string
  age: 23, // integer
  friends: ['Susan', 'Anna', 'Maggie'], // array
  address: {
    // object
    number: 123,
    street: 'Main St',
    city: 'London'
  },
  sayHello: function() {
    // function
    console.log('Hello!!');
  }
};

console.log(person.name);
console.log(person.age);
console.log(person.friends[0]);
console.log(person.address.city);
person.sayHello(); // sayHello() console.logs already

// EXERCISE EXAMPLE 1 (Slides)
var book = {
  author: 'George R. R. Martin',
  title: 'A Game of Thrones',
  published: 1994,
  characters: ['Daenarys Targaryen', 'John Snow'],
  publisher: {
    name: 'Voyager',
    founded: 1989
  },
  adaptedToTV: true,
  catchphrase: function() {
    console.log('Valar Morghulis');
  }
};

// EXERCISE EXAMPLE 2
var animal = {
  type: 'dog',
  breed: 'greyhound',
  name: 'Santas Little Helper',
  age: 6,
  lovesTreats: true,
  favouriteToys: ['ball', 'bone'],
  owner: {
    name: 'Homer',
    age: 43
  },
  speak: function(){
    return "Woof!";
  }
};
