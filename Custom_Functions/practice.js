"use strict";
// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.
function summ(arr) {
  let sum = 0;
  for (let elem of arr) {
    sum += elem;
  }
  console.log(sum);
}
summ([1, 2, 3]);

// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.
function divisorArr(number) {
  let res = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
      res.push(i);
    }
  }
  return res;
}
console.log(divisorArr(20));

// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
function arrCharacter(str) {
  let arr = [];
  for (let elem of str) {
    arr.push(elem);
  }
  console.log(arr);
}
arrCharacter("hello");

// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
function back(str) {
  return str.split("").reverse().join("");
}
console.log(back("Привет, мир!"));

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
function upperCase(str) {
  let result = str.slice(0, 1).toUpperCase() + str.slice(1);
  console.log(result);
}
upperCase("name");

// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
function upperCaseWord(str) {
  let result = str.split(" ");
  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].slice(0, 1).toUpperCase() + result[i].slice(1);
  }
  let resultFinish = result.join(" ");
  console.log(resultFinish);
}
upperCaseWord("hello word");

// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.
function arrPush(num) {
  let res = [];
  for (let i = 1; i <= num; i++) {
    res.push(i);
  }
  console.log(res);
}
arrPush(7);

// Сделайте функцию, которая будет возвращать случайный элемент из массива.
function randomArr(arr) {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}
console.log(randomArr([1, 2, 3, 4, 5]));

// Сделайте функцию, которая будет проверять пару чисел на дружественность. Дружественные числа - два числа, для которых сумма всех собственных делителей первого числа равна второму числу и наоборот, сумма всех собственных делителей второго числа равна первому числу.
function frandNum(num1, num2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= num1; i++) {
    if (num1 % i == 0) {
      sum1 += i;
    }
  }
  for (let i = 1; i <= num2; i++) {
    if (num2 % i == 0) {
      sum2 += i;
    }
  }
  if (sum1 == sum2) {
    console.log(true);
  } else {
    console.log(false);
  }
}
frandNum(2, 5);

// Используя созданную вами функцию из предыдущей задачи найдите все пары дружественных чисел в промежутке от 1 до 1000.
function frandNum(num1, num2) {}

// Сделайте функцию, которая будет проверять число на совершенность. Совершенное число - это число, сумма собственных делителей которого равна этому числу.
function perfectNumber(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      sum += i;
    }
  }
  if (sum == num) {
    console.log(true);
  } else {
    console.log(false);
  }
}
perfectNumber(496);

// Найдите все счастливые билеты. Счастливый билет - это билет, в котором сумма первых трех цифр его номера равна сумме вторых трех цифр его номера.
function happy() {}
happy();

// Сделайте функцию, которая параметром будет принимать два числа и возвращать массив их общих делителей.
function arrDivider(num1, num2) {
  let arr = [];
  for (let i = 1; i <= num1 && num2; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
      arr.push(i);
    }
  }
  console.log(arr);
}
arrDivider(10, 20);

// Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит.
function transliteration(str) {}

// Сделайте функцию, которая будет принимать число, а возвращать это число прописью. Пусть функция работает с числами до 999.
