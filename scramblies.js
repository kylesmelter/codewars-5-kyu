// DESCRIPTION:
// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {

    var letters = {};
     for (let i = 0; i < str1.length; i++) {
       let letter = str1[i];
       letters[letter] = letters[letter] + 1 || 1;
     }
   
     for (let i = 0; i < str2.length; i++) {
       var letter = str2[i];
       if (letters[letter] <= 0 || letters[letter] === undefined) {
         return false;
       }
       letters[letter]--;
     }
     return true;
}