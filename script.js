
document.addEventListener('DOMContentLoaded', () => {
    'use strict'
const week = [
"Понедельник",
"Вторник",
"Среда",
"Четверг",
"Пятница",
"Суббота",
"Воскресенье",
];
let day = new Date(); // текущий день
let todayIndex = day.getDate();

// for (let i = 0; i< week.length; i++) {
//     console.log(week[i].bold());
// } 

for (let i = 0; i< week.length; i++) { 
    let a = week[i];
    if ((i === 5 || i === 6) && i !==todayIndex ) {
        document.write("<p>" + a.italics() + "</p>");
    } else if ((i !== 5 || i !== 6) && i === todayIndex) {
        document.write("<p>" + a.bold() + "</p>"); 
    } else if ((i === 5 || i === 6) && i === todayIndex) {
        document.write("<p>" + a.bold().italics() + "</p>"); 
    } else {
        document.write("<p>" + a + "</p>");
    }
} 
});