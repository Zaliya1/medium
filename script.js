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
function checkCount (num) {
    let isPrime = true;
    for(let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime=false;
        }
    }
    if (isPrime === true) {
        console.log(num + ` Делители данного числа 1 и ${num}`);
    }
}
// isPrime(5);

for (let n = 2; n <100; n++) {
    checkCount(n);
}