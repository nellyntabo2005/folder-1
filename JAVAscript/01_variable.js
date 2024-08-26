//variables provide a way to store data as your application is running e.g the current logged in  user cart items states etc
//in js we define /create variables using const let or var keywords with a variable name an assignment operator and the value to be stored 
//examples

const user1="joseph";
let user2="Nelly";
// const and let are block scooped ---they are  only accessible within a block{}of code
//const is used for a constant/non changing variables
//let is used for a variable that can change as  te program runs                                                                                                                             d
var email="nellyntabo2005@gmail.com";

//changing values

console.log(user2);  


username="victor"

console.log(user2);
console.log(user1);
/* user1="sharon"; *///error since you cannot change the value of a constant value
console.log(user1);

//browser alerts--input--output
const response=confirm("are you ready for this???");

console.log(response);//a boolead--true or false

const age=prompt("what is your age");
console.log(age);
//forms are the standard way of getting user input