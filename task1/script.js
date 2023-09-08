const currentDayOfTheWeek = document.getElementById("currentDayOfTheWeek")
const sec = document.getElementById("currentUTCTime")
console.log(sec);

const date = new Date()
const day = date.getDay()
const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const time = date.getTime()


currentDayOfTheWeek.innerHTML = daysOfTheWeek[day]
console.log(daysOfTheWeek[day]);

sec.innerHTML = time