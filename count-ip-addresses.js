// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

// Examples
// * With input "10.0.0.0", "10.0.0.50"  => return   50 
// * With input "10.0.0.0", "10.0.1.0"   => return  256 
// * With input "20.0.0.10", "20.0.1.0"  => return  246

function ipsBetween(start, end) {
    // We'll stsrt by turning each IP address into an array
    let ip1 = start.split('.');
    let ip2 = end.split('.');
    // We'll then create a variable, 'result,' that will keep track of the difference
    let result = 0;
    // Next, we'll create a for-loop that will count to 3 because the length of each
    // array should be 4, and we're starting at 0
    for (let i = 0; i < 4; i++) {
        // Thanks to PEMDAS, we can create a formula to help us find the correct difference
        // between indexes of numbers
        result += (ip2[i] - ip1[i]) * 256 ** (3 - i);
    };
    // Now all we need to do is return 'result'!
    return result;
};