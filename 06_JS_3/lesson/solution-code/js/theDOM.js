document.addEventListener('DOMContentLoaded', function() {
  // Your code here...

  // GETTING ELEMENTS

  var header1 = document.getElementsByTagName('h1');
  // returns a HTML collection (like an Array)
  console.log(header1);

  // returns a single element
  var header2 = document.getElementById('headerID');
  console.log(header2);

  // STYLING ELEMENTS

  // Because it's a collection, we have to use [] to get the individual element
  header1[0].style.color = 'blue';
  // ID returns a single element so we can access style directly
  header2.style.color = 'green';

  header2.style.fontSize = '40px';
  header2.style.background = 'yellow';
  header2.style.padding = '10px';
  header2.style.border = '2px dashed blue';

  // CREATING ELEMENTS

  // use the createElement method
  var newParagraph = document.createElement('p');
  // add some text
  newParagraph.innerText = 'I have just been created with Javascript!';
  // append to the body
  document.body.appendChild(newParagraph);

  // EVENTS

  header2.addEventListener('click', function(event) {
    // the 'event' is whatever the event is ('click') and returns the state of the page
    console.log(event);
    // the 'event.target' is whatever element is being interacted with (the h2)
    console.log(event.target);
    // Then we can change the properties
    event.target.style.color = 'pink';
  });

  var paragraph2 = document.createElement('p');
  paragraph2.innerText = 'Lorem ipsum';
  paragraph2.style.fontSize = '18px';
  paragraph2.style.fontFamily = 'sans-serif';
  paragraph2.style.border = '1px solid orange';
  paragraph2.style.padding = '30px';

  paragraph2.addEventListener('mouseenter', function(event) {
    event.target.style.color = 'yellow';
  });

  document.body.appendChild(paragraph2);
});
