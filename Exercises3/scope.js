//GLOBAL SCOPE
let food = "apple";
let fruits = 5;

//FUNCTION scope
function store () {
const food = "apple"
let fruits = 5;

if (true){
  console.log(food);
}

}
store();
//BLOCK SCOPE

if (true) {
  const food = "apple";
  let fruits = 5;
}



