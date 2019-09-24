// EXERCISE

// 1. Write a function that reverses a string
function reverseString(string) {
  return string.reverse()
}

// 2. Write a function that sorts a string in alphabetical order
function replaceVowels(string){
  return string.split('').sort().join('');
}

// 3. Write a function that loops over an array or Strings and capitalises each one before returning the array 
function capitaliseSentence(arr){
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
}

// 4. Write a function that console logs the data type of the aruments
function checkDataType(type){
  console.log(typeof type);
}

// 5. Write a function that returns the length of the longest word in a sentence
function longestString(sentence){
  var sentenceSplit = sentence.split(' ');
  var longestWord = 0;

  for(var i = 0; i < sentenceSplit.length; i++){
    if(sentenceSplit[i].length > longestWord){
	    longestWord = sentenceSplit[i].length;
    }
  }
  return longestWord;
}