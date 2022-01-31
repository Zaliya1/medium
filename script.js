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

let arrWeek = [
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
    ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]
];

let a = lang === "ru";
a = Number(a);
console.log(arrWeek[a]);

// Задача 2

let namePerson = "Александр";

let result = (namePerson === "Артем") ? 'директор' :
    (namePerson === "Александр") ? 'преподаватель' :
    'студент';
console.log(result);