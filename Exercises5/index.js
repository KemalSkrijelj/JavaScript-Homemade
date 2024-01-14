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

// let numbers = [1,2,3,4,5,11,22,33,44,55,123,234,345,450,510,1323421,421,21,412];

// let arr = numbers.length//15
// let counter = 0;

// while(counter < arr){
//   if(numbers[counter] % 3 == 0){
//     console.log(`Brojevi  koji su deljivi3: ${numbers[counter]}`)
//   }
//   if(numbers[counter] % 2 == 0){
//     console.log(`Brojevi koji su deljivi2: ${numbers[counter]} `)
//   }
//   if(numbers[counter] % 5 == 0 ){
//     console.log(`Brojevi koji su deljiv5: ${numbers[counter]}`)
//   }
//   if(numbers[counter] % 21 == 0){
//     console.log(`Brojevi koji su deljivi21: ${numbers[counter]}`)
//   }
  
//   counter++;
// }


//vezba2

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


//vezba3
let cars = ["audi","bmw","golf","seat","ferrari"]
let broj_automobila = cars.length
let brojacc = 0

while(brojacc < broj_automobila){
  console.log(cars[brojacc])
  brojacc++
}
console.log("-----------")

//vezba4

let num = [2,3,5,64,234,413,41,412,12,4,241,142,325]
let broj = num.length

let counter = 0
let rezultat1 = 0
let rezultat2 = 0


while(counter< broj){
  if(num[counter] % 2 == 0){
    rezultat1 = rezultat1 + num[counter]
  }if(num[counter] % 5 == 0){
    rezultat2 = rezultat2 + num[counter]
  }
  counter++;
}

console.log(`Zbir brojeva koji su deljivi sa 2 je ${rezultat1}`)
console.log(`Zbir brojeva koji su deljivi sa 5 je ${rezultat2}`)
