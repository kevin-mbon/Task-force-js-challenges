function subarray(arr, target) {
    let sum = 0;
    let start = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        // While Sum exceeds the target, contract the window from the left
        while (sum > target && start <= i) {
            sum -= arr[start];
            start++;
        }

        // Check if we have found the target sum
        if (sum === target) {
            return true;
        }
    }
    
    // If we finish the loop without finding the target sum, return false
    return false;
}

// Function to run a test case
function funTestCase(arr, target, expected) {
    const result = subarray(arr, target);
    console.log(`Input: arr = ${JSON.stringify(arr)}, target = ${target}`);
    console.log(`Expected: ${expected}, Actual: ${result}`);
    console.log(result === expected ? "Test Passed" : "Test Failed");
    console.log('');
}

// Test Cases
const testCases = [
    { arr: [4, 2, 7, 1, 9, 5], target: 14, expected: true },    // Typical case with positive numbers
    { arr: [1, 2, 3, 4, 5], target: 9, expected: true },         // Case with multiple possible subarrays
    { arr: [1, 2, 3, 4, 5], target: 15, expected: true },        // Case where the entire array sums to the target
    { arr: [1, 2, 3, 4, 5], target: 16, expected: false },       // Case where no subarray sums to the target
    { arr: [0, 0, 0, 0], target: 0, expected: true },            // Case with zeroes
    { arr: [5], target: 10, expected: false },                   // Single element array that does not match the target
    { arr: [5, -3, 2, 3, 1], target: 5, expected: true },        // Case with negative numbers
    { arr: [1, -1, 1, -1, 1, -1], target: 0, expected: true },   // Case with alternating positive and negative numbers
];

// Running Test Cases
testCases.forEach((test, index) => {
    console.log(`Test Case ${index + 1}:`);
    funTestCase(test.arr, test.target, test.expected);
    
});