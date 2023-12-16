//function greet(text) {
//  console.log("Welcome to our website " + text);
//}

//console.log ("rest of the code");

//function signUp() {
//  let name = prompt ("What is your name");
//  greet(name);
//}
//
///

///
//signUp ();


function max(nr1 = 0, nr2 = 0){
  if (nr1 > nr2){
  return nr1 ;
  } else {
    return nr2 ;
  }
}

let inbox = max (5, 20);
console.log(inbox);