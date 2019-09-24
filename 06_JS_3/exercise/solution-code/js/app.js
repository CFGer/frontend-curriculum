document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  // Create a User object with the following properties:
  // - firstName = string
  // - lastName = string
  // - age = integer
  // - occupation = string
  // - address = object, with number, street and city as properties
  // - friends = array
  // - hasCar = boolean

  var user = {
    firstName: "Jane",
    lastName: "Doe",
    age: 22,
    occupation: "Doctor",
    address: {
      number: 123,
      street: "Main Street",
      city: "London"
    },
    friends: ["Lucy", "Tim"],
    hasCar: true
  };

  // Using the existing HTML elements, assign each element its respective property from your new object
  // The first one has been done for you

  // BASIC
  // name
  var nameElement = document.getElementById("name");
  nameElement.innerText = `${user.firstName} ${user.lastName}`;
  
  // age
  var ageElement = document.getElementById("age");
  ageElement.innerText = user.age;
  
  // occupation
  var occupationElement = document.getElementById("occupation");
  occupationElement.innerText = user.occupation;
  
  // hasCar
  var hasCarElement = document.getElementById("hasCar");
  hasCarElement.innerText = user.hasCar;

  // INTERMEDIATE
  // address number
  var adrsNumber = document.getElementById('adrsNumber');
  adrsNumber.innerText = user.address.number;
  
  // address street
  var adrsStreet = document.getElementById('adrsStreet');
  adrsStreet.innerText = user.address.street;
  
  // address city
  var adrsCity = document.getElementById('adrsCity');
  adrsCity.innerText = user.address.city;

  // ADVANCED
  // loop through the friends and append each one onto the correct element
  var friendsElement = document.getElementById("friends");
  for(var i = 0; i < user.friends.length; i++){
    var newFriend = document.createElement('li');
    newFriend.innerText = user.friends[i];
    friendsElement.append(newFriend);
  }
})