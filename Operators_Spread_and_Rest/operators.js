"use strict";
let arr = [1, 2, 3, 4, 5];
// Найдите с помощью приведенной функции сумму элементов массива.
function func(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr));

// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.
let min = Math.min(...arr);
console.log(min);

// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.
function func1(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum / nums.length;
}
console.log(func1(1, 2, 3));
