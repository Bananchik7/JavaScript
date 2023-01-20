"use strict";
// Используя оператор ! инвертируйте приведенное условие.
if (!(num1 >= 0 || num2 <= 10)) {
  console.log("+++");
} else {
  console.log("---");
}

// Вспомните и напишите, какие значения при приведении к логическому типу дают false.
let test = 0;
let test1 = -0;
let test2 = +0;
let test3 = null;
let test4 = NaN;
let test5 = undefined;
let test6 = "";
if (test == true) {
  console.log("+++");
} else {
  console.log("---");
}

// Перепишите следующий код с использованием сокращенной формы.
let test7 = true;
if (test7) {
  console.log("+++");
} else {
  console.log("---");
}

// Перепишите следующий код с использованием сокращенной формы.
if (!test7) {
  console.log("+++");
} else {
  console.log("---");
}

// Перепишите следующий код в сокращенной форме.
let test8 = true;
let test9 = true;
let test10 = true;
if (test8 && test9) {
  console.log("+++");
} else {
  console.log("---");
}

if (test8 && !test9) {
  console.log("+++");
} else {
  console.log("---");
}

if (test8 || (!test9 && !test10)) {
  console.log("+++");
} else {
  console.log("---");
}

// Перепишите следующий код в сокращенной форме.
if (test > 0) console.log("+++");
else console.log("---");

if (test > 0) console.log("+++");

// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). Модифицируйте предыдущую задачу так, чтобы, если в переменной day будет не число от 1 до 31, выдавалось сообщение об ошибке.
let day = 20;
if (day <= 10) {
  console.log("Первая декада");
} else if (day > 10 || day <= 20) {
  console.log("Вторая декада");
} else if (day > 20 || day <= 31) {
  console.log("Третья декада");
} else {
  console.log("Неверное число");
}

// Пусть в переменной num хранится число. Если это число попадает в диапазон от 10 до 99, то найдите сумму цифр этого числа. Если полученная сумма меньше или равна 9, то выведите сообщение о том, что сумма цифр однозначна, в противном случае выведите сообщение о том, что сумма цифр двухзначна.
let number = 30;
if (number > 10 || number < 100) {
  number = Number(number[0]) + Number(number[1]);
  if (number <= 9) {
    console.log("Сумма цифр однозначна");
  } else {
    console.log("Сумма цифр двухзначна");
  }
} else {
  console.log("Цифра не в диапозоне от 10 до 99");
}

// Перепишите следующий код через тернарный оператор.
let num = 1;
let res = num >= 0 ? (res = "1") : (res = "2");
console.log(res);

// Используя оператор ==, узнайте, равны ли значения этих переменных или нет.
let a = 2 * (3 - 1);
let b = 6 - 2;
console.log(a == b);

// Спросите у пользователя, есть ли ему уже 18 лет. Если есть - выведите на экран алерт с текстом для взрослых, а если нет, выведите сообщение о том, что доступ пользователю запрещен.
let year = confirm("Есть ли Вам 18 лет?");
if (year) {
  alert("Текст для взрослых");
} else {
  alert("Доступ пользователю запрещен");
}

// Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, не работает. Исправьте ошибку автора кода.
let age = 17;
let adult;
if (age >= 18) {
  let adult = true;
} else {
  let adult = false;
}
console.log(adult);

// Автор приведенного ниже кода хотел выполнить проверку возраста на достижение 18 лет. Код, однако, при любом значение возраста выводит в консоль значение undefined. Исправьте ошибку автора кода.
let age1 = 17;
let adult1;
if (age1 >= 18) {
  adult1 = true;
} else {
  adult1 = false;
}
console.log(adult1);

// Автор приведенного ниже кода хотел выполнить проверку возраста. Код, однако, при значение возраста большим 18 лет выводит в консоль значение undefined.
let age2 = 19;
let res2;
if (age2 >= 18) {
  if (age2 <= 23) {
    res2 = "от 18 до 23";
  } else {
    res2 = "больше 23";
  }
} else {
  res2 = "меньше 18";
}
console.log(res2);

// В переменной arr содержится некоторый массив с числами. Напишите условие, которое проверит, что в массиве 3 элемента. Если это так, выведите на экран сумму элементов массива.
let arr = [1, 2, 3];
if ((arr.length = 3)) {
  console.log(arr[0] + arr[1] + arr[2]);
}

// Пусть в переменной num хранится число. Определите, четное число или нет. Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.
let num1 = 123;
let first = String(num1)[0];
if (
  first[2] == 0 ||
  first[2] == 2 ||
  first[2] == 4 ||
  first[2] == 6 ||
  first[2] == 8
) {
  console.log("Число четное");
} else {
  console.log("Число нечетное");
}

// Код должен проверить сумму чисел.
let number1 = 1;
let number2 = 2;
if (number1 + number2 == 3) {
  console.log("+++");
} else {
  console.log("---");
}

// Код должен проверить сумму чисел.
let number3 = "1";
let number4 = "2";
if (Number(number3) + Number(number4) == 3) {
  console.log("+++");
} else {
  console.log("---");
}

// Код должен проверить первую цифру числа.
let number5 = 123;
let first1 = String(number5)[0];
if (first1[0] == 1) {
  console.log("+++");
} else {
  console.log("---");
}

// Код должен проверить первую цифру числа.
let number6 = 123;
if (String(number6)[0] == 1) {
  console.log("+++");
} else {
  console.log("---");
}

// Код должен проверить, что в числе ровно две цифры.
let number7 = 12;
if (String(number7).length == 2) {
  console.log("+++");
} else {
  console.log("---");
}

// Код должен проверить равна ли сумма первых трех цифр числа сумме вторых трех чисел.
let number8 = "123033"; // берем в кавычки, чтобы обращаться к цифрам
let sum1 = Number(number8[0]) + Number(number8[1]) + Number(number8[2]);
let sum2 = Number(number8[3]) + Number(number8[4]) + Number(number8[5]);
if (sum1 == sum2) {
  console.log("суммы равны");
} else {
  console.log("суммы не равны");
}

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = 5;
if (month == 1 && month == 2 && month == 12) {
  console.log("Winter");
} else if (month == 3 || month == 4 || month == 5) {
  console.log("Spring");
} else if (month == 6 || month == 7 || month == 8) {
  console.log("Summer");
} else {
  console.log("Autumn");
}

// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
let str = "abcde";
if (str[0] == "a") {
  console.log("Да");
} else {
  console.log("Нет");
}

// Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.
let number9 = 12345;
let number10 = String(number9)[0];
if (number10[0] == 1 || number10[0] == 2 || number10[0] == 3) {
  console.log("Да");
} else {
  console.log("Нет");
}
