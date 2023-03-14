// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw 
// according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet 
// (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring
//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// In some languages, it is possible to mutate the input to the function. This is something that you should never do. 
// If you mutate the input, you will not be able to pass all the tests.

function score( dice ) {
    // Let's start by creating a copy of the array parameter using the slice method so we don't mutate anything
    let arrayCopy = dice.slice();
    // Next, we'll create a variable, points, that will keep track of the points scored
    let points = 0;
    // After that, we'll create a variable for each value on the dice that will act as a counter for each value
    let ones = 0;
    let twos = 0;
    let threes = 0;
    let fours = 0;
    let fives = 0;
    let sixes = 0;
    
    // Then we'll loop through our copied array
    for(let i = 0; i <= arrayCopy.length - 1; i++) {
        // Inside the loop we'll create an if conditional that will add 1 to the applicable values variable
        if(arrayCopy[i] === 1) {
            ones += 1;
        } else if(arrayCopy[i] === 2) {
            twos += 1;
        } else if(arrayCopy[i] === 3) {
            threes += 1;
        } else if(arrayCopy[i] === 4) {
            fours += 1;
        } else if(arrayCopy[i] === 5) {
            fives += 1;
        } else if(arrayCopy[i] === 6) {
            sixes += 1;
        };
        // We'll then check to see if any of the values variables === 3, and if they do we'll add the appropriate number of 
        // points to the points variable before we reset that values variable to 0. We need to reset it to 0 because we'll need
        // to check if there any singleton values at the end
        if(ones === 3) {
            points += 1000;
            ones = 0;
        } else if(twos === 3) {
            points += 200;
            twos = 0;
        } else if(threes === 3) {
            points += 300;
            threes = 0;
        } else if(fours === 3) {
            points += 400;
            fours = 0;
        } else if(fives === 3) {
            points += 500;
            fives = 0;
        } else if(sixes === 3) {
            points += 600;
            sixes = 0;
        };

    };
    // Now we'll check for any singletons of 1's and 5's. For each 1, we'll add 100 points to our points variable, and for each
    // 5 we'll add 50 points to our points variable
    if(ones > 0) {
        points += ones * 100;
    };

    if(fives > 0) {
        points += fives * 50;
    };
    // All that's left to do is return our points variable!
    return points;
};