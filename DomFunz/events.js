const button = document.querySelector("#submit");
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");

const items = todoList.children;

// //CLICK, SCROOLL, RESIZING THE BROSWER

// //ATTACH A EVENT LISTENER
button.addEventListener("click", function() {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `Item ${items.length + 1}`;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  //Create the element and attaching the listener
  newItem.addEventListener("click", deleteItem);
});

function deleteItem(e){
  e.target.remove();
}

todoList.addEventListener('click', function(){
 todoList.classList.toggle("fade");
});


// button.addEventListener("keydown", function(event) {
//   if (event.keyCode === 81){
//     mainTitle.classList.toggle ("spectacular");
//   }
// });



