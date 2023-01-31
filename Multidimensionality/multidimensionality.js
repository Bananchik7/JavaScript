"use strict";
// Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
let arr = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
  ["j", "k", "l"],
];
console.log(arr[3][2]);
console.log(arr[1][1]);
console.log(arr[2][0]);
console.log(arr[0][0]);

// С помощью вложенных циклов найдите сумму элементов этого массива.
let arr1 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let subArr of arr1) {
  for (let elem of subArr) {
    sum += elem;
  }
}
console.log(sum);

// Сформируйте с помощью двух вложенных циклов следующий массив.
let arr2 = [];
for (let i = 0; i < 3; i++) {
  arr2[i] = [];
  for (let j = 0; j < 5; j++) {
    arr2[i].push(j + 1);
  }
}
console.log(arr2);

// Сформируйте с помощью трех вложенных циклов следующий массив.
let arr3 = [];
for (let i = 0; i < 3; i++) {
  arr3[i] = [];
  for (let j = 0; j < 2; j++) {
    arr3[j] = [];
    for (let k = 0; k < 5; k++) {
      arr3[j].push(k + 1);
    }
  }
}
console.log(arr3);

// Найдите сумму элементов приведенного объекта.
let obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};
console.log(
  obj.key1.key1 +
    obj.key1.key2 +
    obj.key1.key3 +
    obj.key2.key1 +
    obj.key2.key2 +
    obj.key2.key3 +
    obj.key3.key1 +
    obj.key3.key2 +
    obj.key3.key3
);

// Используя циклы, найдите сумму элементов этого объекта.
let obj1 = {
  1: {
    1: 11,
    2: 12,
    3: 13,
  },
  2: {
    1: 21,
    2: 22,
    3: 23,
  },
  3: {
    1: 24,
    2: 25,
    3: 26,
  },
};
let sum1 = 0;
for (let key in obj1) {
  let subObj = obj1[key];
  for (let subKey in subObj) {
    sum1 += subObj[subKey];
  }
}
console.log(sum1);

// С помощью вложенных циклов выведите на экран все строки с данными.
let data = {
  1: ["data11", "data12", "data13"],
  2: ["data21", "data22", "data23"],
  3: ["data31", "data32", "data33"],
  4: ["data41", "data42", "data43"],
};
for (let key in data) {
  for (let keys of data[key]) {
    console.log(keys);
  }
}

// Выведите на экран данные каждого работника в формате имя - зарплата.
let employees = [
  {
    name: "name1",
    salary: 300,
  },
  {
    name: "name2",
    salary: 400,
  },
  {
    name: "name3",
    salary: 500,
  },
];
for (let name of employees) {
  console.log(name.name + " " + name.salary);
}

// Выведите на экран сумму зарплат тех работников, возраст которых равен или более 30 лет.
let employees1 = [
  {
    name: "name1",
    salary: 300,
    age: 28,
  },
  {
    name: "name2",
    salary: 400,
    age: 29,
  },
  {
    name: "name3",
    salary: 500,
    age: 30,
  },
  {
    name: "name4",
    salary: 600,
    age: 31,
  },
  {
    name: "name5",
    salary: 700,
    age: 32,
  },
];
let sum2 = 0;
for (let age of employees1) {
  if (age.age >= 30) {
    sum2 += age.salary;
  }
}
console.log(sum2);

// Добавьте еще одно дело в дату '2019-12-29'.
let affairs = {
  "2019-12-28": ["data11", "data12", "data13"],
  "2019-12-29": ["data21", "data22", "data23"],
  "2019-12-30": ["data31", "data32", "data33"],
};
affairs["2019-12-29"].push("data24");
console.log(affairs["2019-12-29"]);

// Добавьте нового студента в подгруппу 'subgroup11'. Добавьте в первую группу еще одну подгруппу. Сделайте четвертую группу, в ней сделайте подгруппу и добавьте в нее двух новых студентов.
let students = {
  group1: {
    subgroup11: ["student111", "student112", "student113"],
    subgroup12: ["student121", "student122", "student123"],
  },
  group2: {
    subgroup21: ["student211", "student212", "student213"],
    subgroup22: ["student221", "student222", "student223"],
  },
  group3: {
    subgroup31: ["student311", "student312", "student313"],
    subgroup32: ["student321", "student322", "student323"],
  },
};
students.group1.subgroup11.push("student114");
students.group1.subgroup13 = [];
students.group4 = [];
students.group4.subgroup41 = [];
students.group4.subgroup41.push("student411");
students.group4.subgroup41.push("student412");
