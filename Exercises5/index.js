//forEach
// let automobili = ["passat", "golf","audi","bmw","seat","ferari","volvo","ford"]

// automobili.forEach(function(automobil){
//   console.log(automobil);
// })




// //for
// let novcanica = [25,5,10,15,32,62,86,62,12,34];
// let broj_novcainca = novcanica.length
// let ukupno_novca = 0;

// for(let brojac = 0; brojac < broj_novcainca; brojac++){
// console.log(novcanica[brojac])
// ukupno_novca = ukupno_novca + novcanica[brojac];
// }
// console.log(ukupno_novca)


// while
// let novcanica = [25,5,10,15,32,62,86,62,12,34];
// let broj_novcainca = novcanica.length

// let brojac = 0;

// while(brojac < broj_novcainca){
//    console.log(novcanica[brojac])

//    brojac++;
// }


// console.log(novcanica[2])

/*

console.log(novcanica.length)

let vrednostNov = 10;

let brojacNovcanica = 0;

let izbrojane = 0;
while (brojacNovcanica < 25){
  izbrojane++;
  brojacNovcanica++;
}
console.log(izbrojane)
*/

//WHILE vezbe
//Prebroj brojeve koji su deljivi sa 3

let numbers = [1,2,3,4,5,11,22,33,44,55,123,234,345,450,510,1323421,421,21,412];

let arr = numbers.length//15
let counter = 0;

while(counter < arr){
  if(numbers[counter] % 3 == 0){
    console.log(`Brojevi  koji su deljivi3: ${numbers[counter]}`)
  }
  if(numbers[counter] % 2 == 0){
    console.log(`Brojevi koji su deljivi2: ${numbers[counter]} `)
  }
  if(numbers[counter] % 5 == 0 ){
    console.log(`Brojevi koji su deljiv5: ${numbers[counter]}`)
  }
  if(numbers[counter] % 21 == 0){
    console.log(`Brojevi koji su deljivi21: ${numbers[counter]}`)
  }
  
  counter++;
}




let novcanica = [10,20,50,100,200,500]
let broj_novcainca = novcanica.length

let brojac = 0
let rez1 = 0
console.log(rez1)
while(brojac < broj_novcainca){
  console.log(novcanica[brojac])
  rez1 = rez1 + novcanica[brojac]
  brojac ++;
  
}
console.log(`Zbir svih brojeva je:${rez1}`)


