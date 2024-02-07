function sayHi() {
  console.log(`hello there ${name}`)
  changeName();
  console.log("sayHi is finished")
}
function changeName() {
 name = "bobby";
 console.log(`we changed it to ${name}`)
 console.log('changed name is finished') 
}
let name ='dev ed'

sayHi();

console.log('We are done with the code')

//A POINTER -> IT REFERS TO AN OBJECT

console.log(this)

const user = {
  name: 'Kemal'
}

const admin = {
  name: 'Admin'
}
function yell() {
  console.log(this.name.toUpperCase())
}
user.yell = yell
admin.yell = yell

user.yell();
admin.yell();

const lists = document.querySelectorAll('li')

lists.forEach((li) => {
  li.addEventListener('click', function() {
    console.log(li)
  });
});


const userNew  = {
  name: "kemal",
  videos: ["html","css",'js','react'],
  greet(){
    let self = this
    console.log(`hello there ${self.name}`)
    const getVideos = function(){
      console.log(`you currently have ${self.videos.lenght} videos`)
    };
    getVideos()
  }
};

userNew.greet()
///////////

//FUNCTION -> SPECIAL OBJECTS
//BIND, CALL, APPLY

const person = {
  firstName:"Kemal",
  lastName:"Skrijelj",
  getName(){
    console.log(this.firstName, this.lastName)
  }
}
person.getName()

function registerUser(country,lang) {
  this.getName()
  console.log(`My country is ${country} and my language is ${lang}`)
}
// const register = registerUser.bind(person)
// register("Serbia", "serbian")

// registerUser.call(person, "Serbia", "serbian")
registerUser.apply(person, ["Serbia","serbian"])


//Constructor function

function Todo(name,complated) {
  this.name = name;
  this.complated = complated,
  this.getTodoName = function (){
    console.log(this.name)
  }
}
const todo = new Todo("Eggs", false)
const todo2 = new Todo("Homework", true)
console.log(todo, todo2)

todo.getTodoName()
todo2.getTodoName()









