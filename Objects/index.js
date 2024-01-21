let automobili = {
  Ford:["30000","2015", "focus"],
  Audi:['50000','2018','Q8' ],
  Bmw:['60000','2019', "x5"],
  Porsche:["70000","2020","Cayenne"]
}
 console.log("Nacin pristupanja jednom od ponudjenih ")
 console.log(automobili.Audi)
 console.log("----------")

for(let automobil in automobili){
  let naziv = automobil
  let podaci = automobili[automobil]

 console.log(`${naziv} cena: ${podaci[0]} eura,
  godina ${podaci[1]},
  model: ${podaci[2]}`)
}

////////////////
let osoba = {
  ime:"Kemal",
  prezime:"Skrijelj",
  godine:"18",
  grad:"Novi Pazar" 
}
console.log(`Ime: ${osoba.ime}
prezime: ${osoba.prezime}
godine: ${osoba.godine}
grad: ${osoba.grad}`)
