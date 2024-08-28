// Write a function that determines if a given word or number is a palindrome. dad 242
///a palindrome is a value that can be read from the front and back part e.g---dad,242..e.t.c
function checkifPalindrome(value) {
    let reversedValue=""
    if(typeof value=="string"){
        //reverse the string
        for(let index=value.length-1; index>=0; index--){
            reversedValue+=value.charAt(index);
        }
        if(value ==reversedValue){
            return true
        }else{
            return false
        }
    }else{
        return checkifPalindrome(value. tostring())
    }
}
console.log(checkifPalindrome("kaliman"));


const PaliCheck =(val)=> val==val.tostring() .split("").reverse().join("")

console.log( PaliCheck(565));
console.log( PaliCheck(123));