//Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. 
//For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.

function addFiveToAnyNumber(numberToBeAdded){
    return function(){
        console.log(numberToBeAdded+5);
    }
}

let closure = addFiveToAnyNumber(10);
closure();

/****************************************************************************************************************************/ 

//Write a recursive function that searches an array for a specific value. The function should return true if the value is found, 
//and false if it is not. You can assume that the array is not nested.

let arr = [103,436,64,21,57,43,87,4,57,342,7657,35,355];

if(arr.includes(77))
{
    console.log("true");
}
else{
    console.log("false");
}


/****************************************************************************************************************************/ 

//Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument 
//that will be used as the text content of the new paragraph element.

function printUserPara(userPara){

    let pTag = document.createElement('p');
    pTag.innerText = userPara;
    let body = document.querySelector('body');
    body.appendChild(pTag);
}

let para = prompt("Enter Paragraph: ");
printUserPara(para);

/****************************************************************************************************************************/ 

//Write a function that adds a new list item to an unordered list in an HTML document. The function should take a string argument 
//that will be used as the text content of the new list item.

function addItemsToList(itemToBeAdded){
    document.getElementById("list");
    let liTag = document.createElement('li');
    liTag.innerText = itemToBeAdded;
    let ul = document.querySelector('ul');
    ul.appendChild(liTag);
}

let Quantity = prompt("How many items you want to add?");
for(let i=1; i<= Quantity; i++){
    let items = prompt("Add "+ i + " Item");
    addItemsToList(items);
}

/****************************************************************************************************************************/ 

//Write a function that changes the background color of an HTML element. The function should take two arguments: the first argument 
//is a reference to the HTML element, and the second argument is a string representing the new background color.

function changeBackgroundColor(htmlElement, bgColor){
let tag = document.querySelector(htmlElement);
tag.style.backgroundColor = bgColor;
}
let htmlTag = prompt("Enter Tagname to its background color");
let bgcolor = prompt("Enter Background Color");
changeBackgroundColor(htmlTag,bgcolor);

/****************************************************************************************************************************/ 

//Write a function that saves an object to localStorage. The function should take two arguments: the first argument is a string 
//representing the key to use for storing the object, and the second argument is the object to store.

function storeObjectInLocalStorage(key,object){
let stingify = JSON.stringify(object);
localStorage.setItem(key, stingify);
}

let Books = [];
function addBooks(){
 let book = {
    title: prompt("Enter Book title"),
    author: prompt("Enter Author Name"),
    genre: prompt("Enter Book genre"),
    publisher: prompt("Enter publisher Name"),
    price: prompt("Enter Price"),
 }
 Books.push(book);
 console.log(Books);
 storeObjectInLocalStorage("Books",Books);
}



/****************************************************************************************************************************/ 

//Write a function that retrieves an object from localStorage. The function should take one argument, which is a string representing 
//the key used to store the object. The function should return the object

function getObjectFromLocalStorage(key){
    let prevRecord = localStorage.getItem(Key);
    let Books = JSON.parse(prevRecord);
    }
    
/****************************************************************************************************************************/ 


// Write a function that takes an object and saves each property to localStorage using the property name as the key and the property 
//value as the value. The function should also retrieve the object from localStorage and return it as a new object.

function saveData(Key,Value){
 addCompany();   
let stingify = JSON.stringify(Value);
localStorage.setItem(Key, stingify);
}

let PreviousRecord = localStorage.getItem("Company");
let Company = PreviousRecord ? JSON.parse(PreviousRecord) : [];
function addCompany(){
let comp = {
    name: prompt("Enter Company Name"),
    founder: prompt("Enter Founder Name"),
    product: prompt("Enter Company product"),
    employees: prompt("Enter No of Employees"),
  
}
Company.push(comp);
console.log(comp);


}
saveData("Company",Company);
    

    