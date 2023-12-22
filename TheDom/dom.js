// const collectionsItems = document.getElementsByClassName("item");
// const todoList = document.getElementById("todo-list");
// const todoNr = document.getElementsByClassName("todo-nr")[0];

// const newItem = document.createElement('li');
// newItem.classList.add("item");
// newItem.innerText = "Item 3";

// const anotherItem  = document.createElement("li");
// anotherItem.classList.add("item");
// anotherItem.innerText = "Item 4";

// todoList.appendChild(newItem);
// todoList.appendChild(anotherItem);

// //Update the ammount of items that we have
// todoNr.innerText + collectionsItems.length;

// console.log(collectionsItems);


const todoList = document.querySelector("#todo-list");
const items = todoList.children();

const todoNr = document.querySelector(".todo-nr");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "Item 3";

const anotherItem  = document.createElement("li");
anotherItem.classList.add("item");
anotherItem.innerText = "Item 4";

todoList.appendChild(newItem);
todoList.appendChild(anotherItem);

//Update the ammount of items that we have
todoNr.innerText = items.length;

console.log(items);