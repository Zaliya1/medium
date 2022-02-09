'use strict'
const time = function() {

let now = new Date();
const arrWeek = ["понедельник","вторник","среда", "четверг", "пятница", "суббота", "воскресенье"];
const day = arrWeek[now.getDay()];
const arrMonth = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const month = arrMonth[now.getMonth()];
const date = now.getDate();
const year = now.getFullYear();
const hour = now.getHours();  
const minute = now.getMinutes();
const second = now.getSeconds();

function declOfNum(n, arr) {  
    n = Math.abs(n) % 100; 
    let n1 = n % 10;
    if (n > 10 && n < 20) { 
        return arr[2]; 
    } else {
        if ((n1 >= 5 && n1 < 20) || n1 === 0) { return arr[2]; }
        if (n1 > 1 && n1 < 5) { return arr[1]; }
        if (n1 == 1) { return arr[0]; }
    }
}
declOfNum(11, ['час', 'часа', 'часов']); // вернёт — минута
declOfNum(17, ['минута', 'минуты', 'минут']); // вернёт — минута
declOfNum(53, ['секунда', 'секунды', 'секунд']); // вернёт — минута

const hour1 = declOfNum(hour, ['час', 'часа', 'часов']);
const minute1 = declOfNum(minute, ['минута', 'минуты', 'минут']);
const second1 = declOfNum(second, ['секунда', 'секунды', 'секунд']);

const todayVersionA = "Сегодня " + day + ", " + date + " " + month + " " + year + " года, " + hour + " " + hour1 + " " + minute + " " + minute1 + " " + second + " " + second1;

const todayVersionB = new Date().toLocaleString(); 

document.querySelector('.today1').textContent = todayVersionA;
document.querySelector('.today2').textContent = todayVersionB;
    
};
time();
setInterval(time, 1000);