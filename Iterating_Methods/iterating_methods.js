"use strict";
// Дан массив с числами. Используя метод map извлеките из каждого элемента массива квадратный корень и запишите результат в новый массив.
let arr = [1, 2, 3, 4, 5];

let result = arr.map(function (elem) {
  return elem * elem;
});
console.log(result);

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.
let result1 = arr.map(function (elem) {
  return elem + "!";
});
console.log(result1);

// Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, умноженное на его порядковый номер в массиве.
let result2 = arr.map(function (elem, index) {
  return elem * index;
});
console.log(result2);

// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.
let sum = 0;
arr.forEach(function (elem) {
  sum += elem * elem;
});
console.log(sum);

// Дан массив с числами. Оставьте в нем только положительные числа.
let result3 = arr.filter((elem) => elem % 2 == 0);
console.log(result3);

// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
let arr1 = ["abc", "abcd", "abcde", "abcdef"];
let result4 = arr1.filter((elem) => elem.length >= 5);
console.log(result4);

// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
let result5 = arr.every((elem) => elem > 0);
console.log(result5);

// Дан массив с числами. Проверьте то, что для всех элементов произведение их значений на их порядковый номер меньше 30.
let result6 = arr.every((elem, index) => elem * index < 30);
console.log(result6);

// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.
let result7 = arr.some((elem) => elem > 0);
console.log(result7);
