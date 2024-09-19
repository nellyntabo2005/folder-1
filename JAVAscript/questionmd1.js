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


//Write a function `removeDuplicates(nums)` that takes an array of numbers `nums` and removes any duplicate numbers, returning a new array without duplicates.using loop and if else

function removeDuplicates(input){
    let output = [];
    for(let index=0;index<input.length; index++){
        let current=input[index]
        if(!output.includes(current)) {
        output.push(current)
    }
}
return output
    
}
console.log(removeDuplicates([1,2,2,3,4,5,5,6,6]));
//call back fn

//Write a function `capitalizeWords(sentence)` that takes a sentence `sentence` and capitalizes the first letter of each word in the sentence.
functioncapitalizeWords(sentence) {
    let sentence='nelly the best'
    let words=sentence.split(' ')
    let capitalizedWords=words.map(word=>word.charAt(0).toUpperCase()+word.slice(1).
        toLowerCase.join()).join(' ')
        return capitalizedWords
console.log();
}
console.log(capitalizedWords);
//Write a function `findMissingNumber(nums)` that takes an array of numbers `nums` containing unique integers from 1 to n (inclusive) and returns the missing number in the sequence.
[1,2,3,5,6,7,8]

findMissingNumber(nums) {
    let n=nums.length+1;
    let expectedSum=n*(n+1)/2;
    let actualSum=nums.reduce((a,b)=>a+b,0);
    return expectedSum-actualSum;


}
//Write a function `sumOfSquares(nums)` that takes an array of numbers `nums` and returns the sum of the squares of all the numbers.
function sumOfSquares(nums){
   let nums=[2,4,6,8]
   let sum=0;
   for(let index=0;index<nums.length;index++){
    let current=nums[index];
    sum=sum+current*current
    }

}



       
    
        



