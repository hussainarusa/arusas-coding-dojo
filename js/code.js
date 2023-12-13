// Find a pair with the given sum in an array
// Given an unsorted integer array, find a pair with the given sum in it.

function findSumPair(array, targetSum){
    const numMap = {};
//     this will store the numbers gone thru
 for (let i = 0; i < array.length; i ++){
     const currentVal = array[i]
     const compliment = currentVal-targetSum
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