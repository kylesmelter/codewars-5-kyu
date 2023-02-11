// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    let counts = {};

    let lowerCase = s.toLowerCase();
    
    for(let i = 0; i <= lowerCase.length - 1; i++) {
      let value = lowerCase[i];
      
      counts[value] = counts[value] + 1 || 1;
    };

    let holder = [];

    for(let key in counts) {
        if(counts[key] === 1) {
            holder.push(key);
        };
    };

    if(holder.length === 0) {
        return '';
    };

    let result = holder[0];

    for(let i = 0; i <= s.length - 1; i++) {
        if(result === s[i]) {
            return result;
        } else if(result.toUpperCase() === s[i]) {
            return result.toUpperCase();
        };
    }; 
};