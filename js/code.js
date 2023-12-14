// Find a pair with the given sum in an array
// Given an unsorted integer array, find a pair with the given sum in it.

function findSumPair(array, targetSum){
    const numMap = {};
//     this will store the numbers gone through
 for (let i = 0; i < array.length; i ++){
     const currentVal = array[i]
     const compliment = targetSum-currentVal
     // Found a pair
     if (numMap[compliment] !== undefined){

         return [compliment, currentVal];
     }
     // Add the current number to the hash table
     numMap[currentVal] = i
 }

  // if no pair is found
  return null

}
// Pseudo:  Take in an array and target sum, sort through the integers of array,
// add integers in array and compare to the sum int by comparing it to the num,
// the function should return all integers in the array that give the target sum

const array = [1,2,3,4,5]

const targetSum = 9;

const result = findSumPair(array,targetSum)

if (result) {
    console.log(`Pair with sum ${targetSum}: [${result[0]}, ${result[1]}]`);
} else {
    console.log(`No pair found with sum ${targetSum}`);
}

// function findPairWithSum(arr, targetSum) {
//     const numMap = {}; // Using an object as a hash table to store visited numbers
//
//     for (let i = 0; i < arr.length; i++) {
//         const currentNum = arr[i];
//         const complement = targetSum - currentNum;
//
//         // Check if the complement is already in the hash table
//         if (numMap[complement] !== undefined) {
//             // Found a pair
//             return [complement, currentNum];
//         }
//
//         // Add the current number to the hash table
//         numMap[currentNum] = i;
//     }
//
//     // If no pair is found
//     return null;
// }
//
// // Example usage:
// const array = [1, 2, 3, 4, 5];
// const targetSum = 9;
// const result = findPairWithSum(array, targetSum);
//
// if (result) {
//     console.log(`Pair with sum ${targetSum}: [${result[0]}, ${result[1]}]`);
// } else {
//     console.log(`No pair found with sum ${targetSum}`);
// }
