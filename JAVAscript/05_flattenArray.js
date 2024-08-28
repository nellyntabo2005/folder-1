//write aflattten arrray (arr)that takes a nested array arr and return a flattened array containing all the elements in a nested array
const myArray=[1,2,3,[32,43,34],90,[323[43,34],3,2],[32,23]]//input
const flattenedArray=[1,2,3,32,43,34,90,323,43,34,3,2,32,23] //expected output


//loop through my array--acess each element
//create new empty array--flattened arrray -result/final
//if an element is not an array,add it to the flatttened/final array
//else if it is an array,loop through it addding its elements to the resulting arrray
//when done return array
// when done return the final array




function flattenArray(inputArray){
    let finalArray = []
    for(let index=0;index<inputArray.length; index++){
        // check if element at inputArray[index] === array
        console.log(inputArray[index]);

        if(typeof inputArray[index] == "object" ){
            finalArray.push( ...flattenArray(inputArray[index])  )
        }else{
            finalArray.push(inputArray[index])
        }
    }
    return finalArray
}
flattenArray(myArray)