// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the 
// other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    // We'll start by creating an array containing only 0's using the filter method, and then record the
    // length of that array
    let zeros = arr.filter(x => x === 0).length;
    // Next, we'll create another array using the filter method, but this array will have everything but 0's
    // from the original array
    let result = arr.filter(x => x !== 0);
    // Then we'll loop through the zeros array and push a 0 to our result array for each iteration
    for(let i = 0; i < zeros; i++) {
      result.push(0)
    }  
    // All we have to do now is return our result array!
    return result;
};