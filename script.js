'use strict'
const time = function() {

let now = new Date();
const indexDay = now.getDay();
const indexMonth = now.getMonth();
console.log(indexMonth);
const date = now.getDate();
const year = now.getFullYear();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

const month = function(index) {
    const arrMonth= {
        0: "января",
        1: "февраля",
        2: "марта",
        3: "апреля",
        4: "мая",
        5: "июня",
        6: "июля",
        7: "августа",
        8: "сентября",
        9: "октября",
        10: "ноября",
        11: "декабря",
    };
    return arrMonth[index];
};
const dayWeek = function(index) {
    const arrWeek= {
        0: "понедельник",
        1: "вторник",
        2: "среда",
        3: "четверг",
        4: "пятница",
        5: "суббота",
        6: "воскресенье",
    };
    return arrWeek[index];
};

function checkHour (num) {
    if (num === 1) {
        num = num + " час";
    } else if(num > 1 && num <5) {
        num = num + " часа";
    } else if (num >=5) {
        num = num + " часов";
    }
    return num;
}
function checkMinute (num) {
    if (num === 1) {
        num = num + " минута";
    } else if(num > 1 && num <5) {
        num = num + " минуты";
    } else if (num >=5) {
        num = num + " минут";
    }
    return num;
}
function checkSecond (num) {
    if (num === 1) {
        num = num + " секунда";
    } else if(num > 1 && num <5) {
        num = num + " секунды";
    } else if (num >=5) {
        num = num + " секунд";
    }
    return num;
}

const todayVersionA = "Сегодня " + dayWeek(indexDay) + ", " + date + " " + month(indexMonth) + " " + year + " года, " + checkHour(hour) + " " + checkMinute(minute) +" " + checkSecond(second);

const todayVersionB = new Date().toLocaleString(); 

document.querySelector('.today1').textContent = todayVersionA;
document.querySelector('.today2').textContent = todayVersionB;
    
};
time();
setInterval(time, 1000);