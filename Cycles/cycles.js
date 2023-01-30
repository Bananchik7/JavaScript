"use strict";
// С помощью цикла for выведите в консоль числа от 1 до 100.
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Выведите в консоль все элементы следующего массива.
let arr = ["a", "b", "c", "d", "e"];
for (let element of arr) {
  console.log(element);
}

// Выведите в консоль все ключи следующего объекта. Выведите в консоль все элементы следующего объекта.
let obj = { x: 1, y: 2, z: 3 };
for (let key in obj) {
  console.log(key);
}
for (let key1 in obj) {
  console.log(obj[key1]);
}

// Выведите в консоль числа от 1 до 100.
let number = 1;
while (number <= 100) {
  console.log(number);
  number++;
}

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.
let number1 = 5;
let i1 = 1;
while (number1 < 1000) {
  number1 = number1 * 3;
  i1++;
}
console.log(number1);
console.log(i1);

// Выведите в консоль все элементы следующего массива. Выведите в консоль все элементы следующего массива, за исключением нулевого и последнего. Выведите в консоль элементы следующего массива в обратном порядке.
let arr1 = ["a", "b", "c", "d", "e"];
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
for (let i = 1; i < arr1.length - 1; i++) {
  console.log(arr1[i]);
}
for (let i = arr1.length - 1; i > 0; i--) {
  console.log(arr1[i]);
}

// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
let arr2 = [2, 5, 9, 15, 1, 4];
for (let element of arr2) {
  if (element > 3 && element < 10) {
    console.log(element);
  }
}

// Найдите сумму четных чисел от 2 до 100.
let res = 0;
for (let i = 2; i <= 100; i++) {
  res += i;
}
console.log(res);

// Найдите сумму элементов, являющихся четными числами.
let arr3 = [2, 5, 9, 3, 1, 4];
let res1 = 0;
for (let element of arr3) {
  if (element % 2 == 0) {
    res1 += element;
  }
}
console.log(res1);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str = "";
for (let i = 1; i < 10; i++) {
  if (i % 2 == 0 || i % 2 !== 0) {
    str += "-";
  }
  str += i;
}
console.log(str + "-");

// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.
for (let i = 10; i <= 1000; i++) {
  let str = String(i);
  if (Number(str[0]) + Number(str[1]) == 5) {
    console.log(i);
  }
}

// С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999.
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 3; j++) {
    document.write(i);
  }
}

// С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33.
for (let i = 10; i <= 30; i += 10) {
  for (let j = 1; j <= 3; j++) {
    document.write(i + j + " ");
  }
}

// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
let arr6 = [-2, -1, 1, 2, 3];
let arr7 = [];
for (let element of arr6) {
  if (element > 0) {
    arr7.push(element);
  }
}
console.log(arr7);

// Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.
let arr8 = [-2, -1, 1, 2, 3];
for (let i = 0; i < arr8.length; i++) {
  arr8[i] += 10;
}
console.log(arr8);

// Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, а значениями - ключи старого объекта.
let obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };

// Переберите этот объект циклом и увеличьте каждый элемент этого объекта на единицу.
let obj3 = { x: 1, y: 2, z: 3 };
for (let key in obj3) {
  obj3[key] = obj3[key] + 1;
}
console.log(obj3);

// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+++', а если нет - выведите '---'.
let arr9 = ["a", "b", "c", "d", "e"];
let flag = false;
for (let element of arr9) {
  if (element == "c") {
    flag = true;
    break;
  }
}
if (flag === true) {
  console.log("+++");
} else {
  console.log("---");
}

// Подсчитайте количество цифр 3 в этом массиве.
let arr10 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;
for (let elem of arr10) {
  if (elem == 3) {
    counter++;
  }
}
console.log(counter);

// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.
let arr11 = ["a", "b", "c", "a", "a", "b", "b", "c", "a"];
let count = {};
for (let element of arr11) {
  if (count[element] === undefined) {
    count[element] = 1;
  } else {
    count[element]++;
  }
}
console.log(count);

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.
let arr12 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < arr12.length; i++) {
  console.log(arr12[i + 1]);
}

// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.
for (let i = 0; i < arr12.length; i++) {
  console.log(arr12[i + 1] + arr12[i]);
}

// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.
for (let i = 2; i < arr12.length; i++) {
  console.log(arr12[i - 2] + ", " + arr12[i - 1]);
}

// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.
for (let i = 2; i < arr12.length; i++) {
  console.log(arr12[i - 2] + arr12[i - 1] + arr12[i]);
}

// Переберите его циклом и в каждой итерации цикла выведите сумму предыдущего, текущего и следующего элементов массива.
for (let i = 2; i < arr12.length; i++) {
  console.log(arr12[i - 1] + arr12[i] + arr12[i + 1]);
}

// Код должен вывести числа от 0 до 10.
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Код должен вывести числа от 10 до 0.
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

// Код должен найти сумму элементов массива.
let arr13 = ["1", "2", "3", "4", "5"];
let sum = 0;
for (let i = 0; i < arr13.length; i++) {
  sum += Number(arr13[i]);
}

// Код должен найти сумму элементов массива.
for (let elem of arr13) {
  sum += Number(elem);
}
console.log(sum);

// Код должен найти сумму элементов объекта.
let obj2 = { a: 1, b: 2, c: 3 };
let sum1 = 0;
for (let elem in obj2) {
  sum1 += obj2[elem];
}
console.log(sum1);

// Код должен проверить, есть ли в массиве число 3 или нет.
let arr14 = [1, 2, 3, 4, 5];
for (let elem of arr14) {
  if (elem === 3) {
    console.log("+++");
    break;
  }
}
