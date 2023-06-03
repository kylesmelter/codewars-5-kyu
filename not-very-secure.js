// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

function alphanumeric(string){
  // We'll start by using an if-conditional to see if the input, 'string,' === '', and
  // if it does we'll return false;
  if(string === '') {
    return false; 
  };
    
  // Next, we'll create an empty array, 'result,' to push our values to while iterating
  // over the input, 'string'
  let result = [];
  // Now we'll use a for-loop to iterate over the input, 'string'
  for(let i = 0; i <= string.length - 1; i++) {
    // Inside the loop we'll have an if-conditional to check if the current value is
    // between 'A' and 'Z', or 'a' and 'z,' or '0' and '9,' and if it is we'll use
    // the .push() method to add it to our 'result' array
    if(string[i] >= 'A' && string[i] <= 'Z' || string[i] >= 'a' && string[i] <= 'z' || string[i] >= '0' && string[i] <= '9') {
      result.push(string[i]);
    };
  };
  // After the loop we'll have one more if-conditional to check if the length of the
  // input, 'string,' === the length of our 'result' array, and we'll return true if
  // they match and false if they don't
  if(string.length === result.length) {
    return true;
  } else {
    return false;
  };
};