function inflationCalculator(){
  let inflationRate = document.querySelector('#inflationRate')
  let money = document.querySelector('#money')
  
  //Prebacivanje iz stringa u number
  inflationRate = Number(inflationRate.value)
  money = Number(money.value)
  
 let years = document.querySelector('#years')
 years = Number(years.value)

// Formula za inflaciju. 
 let worth = money + (money* (inflationRate / 100) );
 console.log(`Za jednu godinu ${worth}`)
 
 for (let i = 0; i < years; i++) {
   worth += worth * (inflationRate / 100)
 }
 console.log(worth)

 worth = worth.toFixed(2)

let newElement = document.createElement('div');
newElement.className = 'new-value'
newElement.innerText = `Danasnji ${money} € vredi isto kao  ${worth}€ za ${years} godina.`;
newElement.style.fontSize = '27px'
newElement.style.textDecoration = 'underline'
newElement.style.marginTop = '15px'

document.querySelector('.cal').appendChild(newElement)
}
