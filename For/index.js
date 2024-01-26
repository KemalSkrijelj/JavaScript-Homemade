//example 1
let novcanince = [200,40,55,60,35,20,65]
 let broj_novcanica = novcanince.length
 
 for ( let brojac in novcanince){
  console.log(brojac)
  console.log(novcanince[brojac])
  console.log("----")
}

//example2

let moneys = [200,40,55,60,35,20,65]

for (let money of moneys){
  console.log(money)
}

//example 3

// let num1 = Number(prompt("unesi prvi br"))
// let num2 = Number(prompt("unesi drugi br"))



// if ((num1) > (num2)){
//  alert(`prvi br (${num1}) je veci od drugog broja (${num2})`)
// }else if((num2) > (num1)){
//  alert(`drugi br (${num2}) je veci od prvog broja (${num1})`)
// }

//example 4

for (let i = 0; i <= 15; i++) {
  if(i === 0){
    console.log(`${i} je paran`)
  }else if (i % 2 === 0){
    console.log(`${i} je paran`)
  }else {
    console.log(`${i} je neparan`)
  }
}

//example 5

let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

let avgMarks = 0

for (let i = 0; i < students.length; i++) {
  avgMarks +=  students[i][1];
  var avg = (avgMarks / students.length)
}
console.log(`Avg marks je ${avgMarks / students.length}`)

if (avg <  60){
  console.log("F")
}else if (avg < 70){
  console.log("D")
}else if (avg < 80){
  console.log("C")
}else if (avg < 90){
  console.log("B")
}

console.log("--------------------")
//example 6

function happy_number(num){
  let m, n;
  let c = []


  while(num !== 1 && c[num] !== true){
    c[num] = true;
    m = 0
    while(num > 0){
      n = num % 10;
      m += n * n;
      num = (num - n) / 10;
    }
    num = m
  }
  return(num === 1)
}

let cnt = 5;
let num = 1;
let f5 = "";

while(cnt-- > 0){
  while(!happy_number(num))
    num++

    f5 = f5 + (num + ",")
    num++
  }

console.log(`First 5 happy numbers are:   ${f5}`);

console.log("----------")

//example 7 
let n = 15
let rez = 0

for (let i = 1; i <= n; i++) {
rez += i;
console.log(rez)   
}