//higher order function---Functions that take other functions as arguments and/or return a function
//The function passed into another function as an argument is referred to as a callback function

function testOne(){
    console.log("running test one function");
}

function testTwo(name,cbFunc){
    console.log("running test  two function");
    console.log(name.toUpperCase());
    cbFunc()
}
testTwo('albert',function dosomething(){ console.log('hello world')})
testTwo('jose','vic')

//map,reduce,forEach,sort,---hof
let myColors=['red','green','blue']
myColors.forEach(function paintingScreen(color){
    console.log("painting screen with colour"+color);

})
    myColors.forEach(testOne)

    //map,arrayfunction/method-run a provided callback function on each element of the given array ,and return a new array with new elements

    function convertToUppercase(currentColor) {
        return currentColor.toUpperCase()
    }

    let resultingMap=myColors.map(convertToUppercase)
    console.log(resultingMap);



