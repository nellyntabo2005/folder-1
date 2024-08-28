//  Write a function that counts the number of vowels in a given string.
//
const  testString="Write a function that counts the number of vowels in a single string"
const  vowels =[ "a","e","i","o","u"]

//loop through the testString characters
//check if each character is found/included in the vowels array
//if it is, increse counter (the variable holding the number of vowels)
//return the final countafter the loop number of all vowels in the test string

function Countvowels(str){
    let numberofVowels=0
    let charactersArray=str.split("")
    charactersArray.array.forEach( function checkifVowel(letter){
             if (vowels.includes(letter.toLowerCase()) ){
    numberofVowels++
}
    });
    console.log("you string has"+numberofVowels+"vowels");
    return numberofVowels
}
Countvowels(testString)
Countvowels("albert")
