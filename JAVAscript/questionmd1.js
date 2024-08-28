//Write a function `mergeArrays(arr1, arr2)` that takes two arrays `arr1` and `arr2` and merges them into a single array, with the elements sorted in ascending order.
function mergeArrays(arr1,arr2) {
    const mergedArray=[...arr1,...arr2];
    mergedArray.sort((a,b)=>a-b);
    return mergedArray;
}
const arr1=[23,20,13]
const arr2=[22,18,15]

const final=mergeArrays(arr1,arr2);
console.log(final);


//Write a function `removeDuplicates(nums)` that takes an array of numbers `nums` and removes any duplicate numbers, returning a new array without duplicates.
function removeDuplicates(nums) {
    // Create a new Set from the input array
    const uniqueSet = new Set(nums);
    
    // Convert the Set back to an array
    const uniqueArray = Array.from(uniqueSet);
}  
const nums = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const result = removeDuplicates(nums);
console.log(result);