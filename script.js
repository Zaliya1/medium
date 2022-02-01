'use strict'

let stroke = "0123456789012345678901234567!!890123456789";

let checkStr = function(str) {
    if (typeof str !== "string") {
        alert("Введите строку");
    } else {
        str = str.trim();
        console.log("Без пробелов: " + str);
        if (str.length > 30) {
            str = str.substring(0, 30) + "...";
            console.log(str);
        }
    }
};

checkStr(stroke);
