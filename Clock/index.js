let today = new Date();

let day = today.getDay();

let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

// console.log(`Today is ${days[day]}`)


let hour = today.getHours()
let minute = today.getMinutes()
let second = today.getSeconds()

let prepand = (hour >= 24) ? " PM " : " AM ";

if(hour === 0){
  if(minute === 0 && second === 0){
    hour = 24;
    prepand = "pm";
  }else {
    hour = 24;
    prepand = 'pm'
  }
}

if(hour >= 12){
  prepand = "pm"
}else {
  prepand = "am"
}

console.log(`Danas je ${days[day]}
Sati je ${hour},
minuta ${minute}
sekundi ${second}`)