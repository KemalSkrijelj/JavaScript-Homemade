//const text = 'kiwi';
//let fruitNr = 0;

//switch(text) {
//  case 'banana':
//    console.log('Wow, i love bannas');
//    fruitNr = 1;
//    break;
//    case 'apple':
//    console.log("I don't like apples ");
//    fruitNr = 2;
//    break;
//    case 'avocado':
//    console.log('I love avocadoooo');
//    fruitNr = 3;
//    break;
//    default:
//    console.log('What is fruit that?');
//    break;  
//}


let userInput = prompt('Tell my favorite fruit');
let convertedValue = userInput.toLowerCase();

//Kiwi

switch (convertedValue) {
  case 'kiwi':
        alert('Kiwi is the first food invented by the ocean boys');
        break;
    case 'banana':
        alert('I bought 12 bananas');
        break;
    case 'apple':
      console.log('Depending on which apple you buy you can ...');
        break;
      default:
      console.log('This fruit is unkown to me');
        break;
}
