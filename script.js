'use strict'
// 1 задача

let arr = [10, 524, 478, 255, 980000, 2000, 6320];

const searchCount = function (array, num1, num2) {
    for (let i = 0; i < array.length; i++) {
        let first = String(array[i])[0];
        if (Number(first) === num1 || Number(first) === num2) {
            console.log(array[i]);
        }
    }
};

searchCount(arr, 2, 4);

// 2 задача

let arr1 = []; //массив от 1 до 100
let arr2 = []; //массив от 2 до 100
let uncorrectArr = []; // массив НЕпростых чисел
let correctArr = []; // массив простых чисел

for (let i = 1; i <= 100; i++) {
    arr1.push(i);
}
for (let n = 2; n <= 100; n++) {
    arr2.push(n);
}
for (let i =0; i< arr1.length; i++) {
    for (let n =0; n<= arr2.length; n++) {
        if (arr1[i] > arr2[n]) {
            if(arr1[i] % arr2[n] === 0) {
                uncorrectArr.push(arr1[i]);
                break;
            }
        }
    }
}

//Сравнить массив 2 и сложный массив. Добавляем в простой массив те числа, которых нет в сложном
for (let i = 0; i < arr2.length; i++) {
    if (uncorrectArr.indexOf(arr2[i]) === -1) {
       correctArr.push(arr2[i]);
    }
}
console.log("Массив простых чисел: " + correctArr);