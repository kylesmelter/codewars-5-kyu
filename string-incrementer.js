// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    for(var i = strng.length - 1; i >= 0; i --) {
      if(!Number(strng[i]) && strng[i] != '0') break; 
    }
    let number = strng.slice(i + 1);
    let newNumber = (Number(number) + 1) + '';
    while(newNumber.length < number.length) newNumber = '0' + newNumber;
    return strng.slice(0, i + 1) + newNumber;
  };