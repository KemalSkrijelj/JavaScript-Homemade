const button = document.querySelector("#submit");
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector(".todo-nr b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input")

const items = todoList.children;

// //CLICK, SCROOLL, RESIZING THE BROSWER

// //ATTACH A EVENT LISTENER
button.addEventListener("click", function(e) {
  e.preventDefault();
  //Create element
  const newItem = document.createElement("li");
  //Adding class
  newItem.classList.add("item");
  //Adding the text
  newItem.innerText = nameInput.value;
  todoList.appendChild(newItem);
  todoNr.innerText = items.length;
  //Delete the value from the input
  nameInput.value = "";
  //Create the element and attaching the listener
  newItem.addEventListener("click", deleteItem);

  console.log(nameInput);
});

function deleteItem(e){
  e.stopPropagation();
  e.target.remove();
}

todoList.addEventListener('click', function(){
  console.log('LALALAL')
 todoList.classList.toggle("fade");
});


// button.addEventListener("keydown", function(event) {
//   if (event.keyCode === 81){
//     mainTitle.classList.toggle ("spectacular");
//   }
// });



