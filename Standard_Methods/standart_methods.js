"use strict";
// Преобразуйте первую букву строки в верхний регистр.
let str = "london";
let result = str.slice(0, 1).toUpperCase() + str.slice(1);
console.log(result);

// Преобразуйте первые 2 буквы строки в верхний регистр.
let result1 = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(result1);

// Преобразуйте первую букву строки в нижний регистр.
let str1 = "London";
let result2 = str1.slice(0, 1).toLowerCase() + str1.slice(1);
console.log(result2);

// Преобразуйте строку 'var_test_text' в 'VarTestText'.
let str2 = "var_test_text";
let words = str2.split("_");
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
}
let result3 = words.join("");
console.log(result3);

// Код должен найти сумму цифр числа.
let num = 12345;
let str3 = String(num);
let arr = str3.split("");
let sum = 0;
for (let digit of arr) {
  sum += Number(digit);
}
console.log(sum);
