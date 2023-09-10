// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

Math.round = function(number) {
    // We'll start by checking to see if the length of the parameter, 'number,'
    // === 1, and if it does we'll return 'number'
    if(number.toString().length === 1) {
      return number;
    };
    // Next, we'll find the index of the decimal using .indexOf()
    let decimal = number.toString().indexOf('.');
    // Then, we'll create a variable, 'decidingNumber,' which will find the
    // value immediately after the decimal
    let decidingNumber = number.toString().slice(decimal)[1];
    // Now, we'll use an if-conditional to see if the value of 'decidingNumber'
    // is >= 5, and if it is we'll drop everything after--and including--the
    // decimal from 'number' and add 1, otherwise we'll return 'number' as-is
    // before the decimal
    if(decidingNumber >= '5') {
      return +(number.toString().slice(0, decimal)) + 1;
    } else {
      return +(number.toString().slice(0, decimal));
    };
};
  
Math.ceil = function(number) {
    // We'll start by checking to see if the length of the parameter, 'number,'
    // === 1, and if it does we'll return 'number'
    if(number.toString().length === 1) {
      return number;
    };
    // Next, we'll find the index of the decimal using .indexOf()
    let decimal = number.toString().indexOf('.');
    // Now we'll drop everything after--and including--the decimal and add 1
    // to what's left
    return +(number.toString().slice(0, decimal)) + 1;
};
  
Math.floor = function(number) {
    // We'll start by checking to see if the length of the parameter, 'number,'
    // === 1, and if it does we'll return 'number'
    if(number.toString().length === 1) {
      return number;
    };
    // Next, we'll find the index of the decimal using .indexOf()
    let decimal = number.toString().indexOf('.');
    // Now we'll drop everything after--and including--the decimal, and return
    // whatever is left as-is
    return +(number.toString().slice(0, decimal));
};