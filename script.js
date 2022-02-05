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

for (let i = 0; i< week.length; i++) {
    console.log(week[i]);
} 

console.log("Сегодня " + week[todayIndex]);

// for (let i = 0; i< week.length; i++) {  Пыталась добавить через document
//     let a = week[i];
//     document.write(a);
// } 