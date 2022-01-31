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
    ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"], 
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
];

if (lang === "ru") {
    console.log(arrWeek[0]);
} else if (lang === "en") {
    console.log(arrWeek[1]);
}

lang === "ru" ? console.log(arrWeek[0]) : console.log(arrWeek[1]);

// Задача 2

let namePerson = "Александр";

let result = (namePerson === "Артем") ? 'директор' :
    (namePerson === "Александр") ? 'преподаватель' :
    'студент';
console.log(result);