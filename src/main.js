import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// function calculateDays() {
//   const today = new Date();
//   const birthday = new Date("1998-12-17");
//   const difference = today.getTime() - birthday.getTime();
//   const days = Math.floor(difference / (1000 * 3600 * 24));
//   return days;
// }
// function caculateDaysBetweenTwoDates(date1, date2) {
//   const difference = date1.getTime() - date2.getTime();
//   const days = Math.floor(difference / (1000 * 3600 * 24));
//   return days;
// }
//return the current date
function getCurrentDate() {
  const today = new Date();
  return today;
}
//return a name of the day
function getDayName(date) { 
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    return dayName;
}


console.log(getDayName(getCurrentDate()));

