// Sum of Pairs
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]

// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * the correct answer is the pair whose second value has the smallest index
// == [4, 2]

// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)

// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * the correct answer is the pair whose second value has the smallest index
// == [3, 7]
// Negative numbers and duplicate numbers can and will appear.

// NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

function sumPairs(ints, s) {
    // Let's start by creating a new, empty set
    let intsSet = new Set();
    // Then we'll create a for loop so we can iterate over the input array
    for (let i = 0; i < ints.length; i++) {
        // Next, we'll create a variable and set it equal too the current value of i
        let currInt = ints[i];
        // After that, we'll create an if conditional to see if our set contains the current value of i subtracted
        // from our number, s, and if it does we'll return s - the current value of i along with the current value
        // of i in an array
        if (intsSet.has(s - currInt)) {
            return [s - currInt, currInt];
        } else {
            // Otherwise, we'll add the current value of i to our set
            intsSet.add(currInt);
        };
    };
};