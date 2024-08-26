//a function is areusable block of code {}

// functions are defined using a function keywork or using an arrow symbol,then to use the code,we call or invoke the function


function getSquare(x){
    console.log("getting square start");
    console.log(x*x )
    console.log("getting square done");
}
/* getSquare(); */ // calling the function
// output: getting square start,getting square done
// functions are reusable block of code,we can call them multiple times in our code
getSquare(32)
getSquare(3)
getSquare(11)
 
function getSurfaceAreaCuboid(l,w,h){
    let front=(l*h)*2
    let back=(l*w)*2
    let side=(h*w)*2
    let totalSurface=front + back+ side
    console.log("Surface area is"+ totalSurface+"cm square");
    return totalSurface

}
 let res1=getSurfaceAreaCuboid(10,5,7)
let res2=getSurfaceAreaCuboid(14,50,17)
let res3=getSurfaceAreaCuboid(110,50,77)
console.log(res1);
/* onsole.log("KSH. 45,075");

function formatMoney(number){
    console.log("KSH.number");
} */
//write a function that returns the area of a square given the length and the width
function getAreaOfSquare(s,s){
    let area=s*s
    let totalArea=s*s
    console.log(s*s);
    return totalArea
}
getAreaOfSquare(3,3)
//write a Jvascript function that takes the radius of a circle as an input/argument and returns its area
function getAreaOfCircle(r){
    let area=3.14*r*r
    return area

}
let res8=getAreaOfCircle(7)
console.log(res8);
