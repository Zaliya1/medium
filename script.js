// Задача 1

let lang = 'ru';

if (lang === "ru") {
    console.log("ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС");
} else if (lang === "en") {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else {
   console.log("Повторите ввод");
}

switch (lang) {
    case "ru":
        console.log("ПН, ВТ, СР, ЧТ, ПТ, СБ, ВС");
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break;
    default:
        console.log("Повторите ввод");
}

// 1 вариант - преобразовать булевое значение в число и по нему обратиться к массиву
let arrWeek = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
    ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
];
let a = lang === "ru";
a = Number(a);
console.log("Вариант 1: " + arrWeek[a]);

// 2 вариант - обратиться по ключу массива

let week = new Map ([
    ['en', ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]],
    ['ru', ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]],
]);
console.log("Вариант 2: "+ week.get(lang));


// Задача 2

let namePerson = "Александр";

let result = (namePerson === "Артем") ? 'директор' :
    (namePerson === "Александр") ? 'преподаватель' :
    'студент';
console.log(result);