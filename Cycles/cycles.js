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

// Найдите сумму элементов элементов, являющихся четными числами.
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

// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
