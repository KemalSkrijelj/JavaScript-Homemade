document.querySelector('#setCookie').addEventListener('click', e => {
  e.preventDefault()
  
  let kolacici = document.cookie
  document.cookie = 'name=kemal';
  
const date = new Date()
let today = date.getTime()
let expires = 2 * 24 * 60 * 60 * 1000
//           dan  sat  min  sek  milisekunda
//Prebacujemo u mili sekunde
console.log(expires)

date.setTime(today + expires)
// Datum isteka 
let newDate = date.toUTCString()

document.cookie = `surname=skrijelj; expires=${newDate}`;
//                   naziv cookie           datum isteka cookija

kolacici = document.cookie
console.log(kolacici)
})