"use strict";
// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран все его элементы.
let object = {
  1: "понедельник",
  2: "вторник",
  3: "среда",
  4: "четверг",
  5: "пятница",
  6: "суббота",
  7: "воскресенье",
};
alert(object[1]);

// Создайте объект user с ключами 'name', 'surname', 'patronymic' и какими-то произвольными значениями. Выведите на экран фамилию, имя и отчество через пробел.
let user = { name: "Nastya", surname: "Shamova", patronymic: "Vladimirovna" };
alert(user["name"] + " " + user["surname"] + " " + user["patronymic"]);

// Создайте объект date с ключами 'year', 'month' и 'day' и значениями, соответствующими текущему дню. Выведите созданную дату на экран в формате год-месяц-день.
let date = { year: 2023, month: "01", day: 19 };
alert(date.year + "-" + date.month + "-" + date.day);

// Исправьте ошибки, допущенные в следующем коде.
let obj = {
  "1a": 1,
  b2: 2,
  "с-с": 3,
  "d 4": 4,
  e5: 5,
};

console.log(obj["1a"]);
console.log(obj.b2);
console.log(obj["c-c"]);
console.log(obj["d 4"]);
console.log(obj.e5);
