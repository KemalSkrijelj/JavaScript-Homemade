//LOCAL STORAGE

//  localStorage.setItem("todo", "Feed the cat");
//  localStorage.setItem("user", "Ed");
//  localStorage.setItem("todo", "food myself");

// // //SESSION STORAGE

// // sessionStorage.setItem("todoList","session feeding cat");

// //GETTING STUFF BACK
// const user = localStorage.getItem("user");

// console.log(typeof user);

const todoList = {
  todo1: "feeding the cat",
  todo2: "feeding myself"
};

localStorage.setItem("todos", JSON.stringify (todoList));

const retrieved = JSON.parse(localStorage.getItem("todos"));

console.log(retrieved);
