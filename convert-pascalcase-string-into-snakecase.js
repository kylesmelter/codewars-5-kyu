// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. 
// Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

// Examples
// "TestController"  -->  "test_controller"
// "MoviesAndBooks"  -->  "movies_and_books"
// "App7Test"        -->  "app7_test"
// 1                 -->  "1"

function toUnderscore(string) {
    // We'll first see if a number was entered as the input, and if it was we'll return a string version of it
    if(typeof string === 'number') {
      return String(string);
    }
    // Then we'll create a variable, 'newString,' consisting of the first letter in the input, 'string'
    let newString = string[0];
    // Next, we'll use a for-loop to iterate over the input, 'string,' starting at the second letter because 'newString' already 
    // contains the first letter
    for(let i = 1; i <= string.length - 1; i++) {
      // Inside the loop we'll have an if-conditional checking to see if the current value is an uppercase letter, and if it is
      // we'll add a space and then the current value to 'newString'. Otherwise we'll just add the current value  
      if(string[i] >= 'A' && string[i] <= 'Z') {
        newString += ' ' + string[i];
      } else {
        newString += string[i];
      };
    };
    // Once we've finished looping, we'll use .toLowerCase() to transform every letter in 'newString' to its lowercase form. We'll
    // then use .split(' ') to turn 'newString' into an array, and then we'll use .join('_') with an underscore so the array will
    // turn back into a string with '_' in place of every space (' ')
    return newString.toLowerCase().split(' ').join('_');
};