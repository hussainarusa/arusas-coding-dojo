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

//Check if a subarray with 0 sum exists or not
// Given an integer array, check if it contains a subarray having zero-sum.
//
// For example,
//
// Input:  { 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }
// Output: Subarray with zero-sum exists
// The subarrays with a sum of 0 are:
// { 3, 4, -7 }{ 4, -7, 3 }{ -7, 3, 1, 3 }{ 3, 1, -4 }{ 3, 1, 3, 1, -4, -2, -2 }{ 3, 4, -7, 3, 1, 3, 1, -4, -2, -2 }