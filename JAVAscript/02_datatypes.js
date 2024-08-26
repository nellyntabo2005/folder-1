// strings,numbers,boolean,null,undefined,---primitive and simple datatypes
//objects,arrays and functions---non-primitive/complex datatypes
//strings --characters enclosed in quotes " "  ''

const currentColor="brown"
const admin="nelly@gmail.com"
const something="123efryhnm.l# ktjhgf"
const date="34567890"
console.log(/* currentColor,admin,something, */date)
const age="38"
const rate="34.45"

//boolean---true or false

const darkModeOn=true
const isLoggedIn=false

//Null-a placeholder value used in place of a default value
const average=null

//undefined---a variable that has not been assigned a value yet
let newUser
let total 


// type of operator can be used to check a variable or value data type
console.log(typeof date);//string
console.log(typeof darkModeon);//boolean
console.log(typeof total);//undefined

//object-a connection of data in a format like in the real real world object----it has properties and functions and methods
// an object are made up of comma-separated key value pairs enclosed in curly barackets{}--object literals
let television={
    brand:"LG",
    sixInInches:63,
    isColored:true,
    sold:false,
    price:null,
    color:"black",
    model:"LG 65",
    owner:"eldohub"
}
const laptop={
    brand:"HP",
    model:"HP 15",
    color:"silver",
    price:50000,
    availablecolors:["blue , black"]
}
console.log(television);
//acccessing value we use a dot notation
console.log(television.brand);
console.log(laptop.price);

//array---is a zero indexed list of items or data or elements
const studets=["albert","kevin","joj","nelly"]


const staff=[{name:"awino", age:70}, {name:"ntabo",age:30},"cherop",800["web","data"],true,null]

//to access data,eelements of any array we use bracket notation with the indexes of the elements starting for the first element

console.log(studets[0]);
console.log(staff[0].age);
console.log(staff[1].name);


//log data from staff array
console.log( staff[4][1]);

//function--reusable block of code

function nameofFunction(){
    //code to execute/run when function is invoked/called
    console.log("function called!!!!");
    console.log("running!!!");
}
function scream(){
    console.log("uiuiuiuiiiiiiii!!!!!!");
    console.log("aooooo");
}
scream()
 
//our discount is 30%
function calculatediscount(initial,rate){
    //initial is an argument in this function
    console.log((rate/100)*initial);
}
calculatediscount(900, 15)
calculatediscount(1000,20)
calculatediscount(200,11)