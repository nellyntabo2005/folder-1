//stands for document object model
//DOM is a tree-like data structure that represents the structure of an HTML or XML document
//it allows elements to be acccessed and manipulated using java script
/*the basic structure of a dom*/
//the tree structure >> it represents the document inform of a tree structure with nodes where each node represents a part of the document
//the root node >> it is the top most node in the tree structure >> it is the document
//>>>each node has aset of properties and methods that can be accesssed and used to manipulate the doc manipulation of these methods is done by java where you can add,remove,modify,attributes in the document
//the dom offers (event Handler) this is where a particular function is called to execute once an event happens */


//dom element by id
let myButton=document.getElementById("first");
let myParagraph=document.getElementById("new");


myButton.addEventListener("click",()=>{
   myParagraph.style.color="magenta";
   myButton.style.backgroundColor="yellow";
});
alert("we are selling people!!!!");

//create 2 tags in html a button and a paragraph that when the window is loaded the color of the text is default black ,when the button is clicked it checks whether the color of the paragraph is green else if it is another it changes to green else returns to default(red)//