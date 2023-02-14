"use strict";
// Сделайте функцию func, которая будет возвращать через return какую-либо строку. Выведите результат работы функции func в консоль. Выведите исходный код функции func в консоль. Запишите в переменную func число 123, тем самым затерев функцию из этой переменной. Выведите новое значение переменной func в консоль.
function func() {
  return "string";
}
console.log(func());
console.log(func);
func = 123;
console.log(func);

// Сделайте функцию func1, которая будет возвращать через return число 3. Скопируйте исходный код функции func1, в переменную func2. Выведите в консоль сумму результатов работы функций func1 и func2.
function func1() {
  return 3;
}
let func2 = func1;
console.log(func1() + func2());

// Сделайте безымянную функцию, которая будет возвращать через return число 1. Запишите эту функцию в переменную func1.
let func3 = function () {
  return 1;
};

// Сделайте массив arr с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. Используя созданный вами массив arr выведите в консоль число 3, вызвав соответствующую функцию.
let arr = [
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  },
];
console.log(arr[2]());

// Используя созданный вами массив arr найдите сумму результатов функций (без цикла). Переберите созданный вами массив arr циклом и выведите результаты работы всех функций в консоль.
console.log(arr[0]() + arr[1]() + arr[2]());

for (let elem of arr) {
  console.log(elem());
}

// Сделайте объект с тремя функциями. Пусть первая возвращает через return число 1, вторая - число 2, третья - число 3. С помощью созданных функций выведите в консоль сумму возвращаемых чисел.
let obj = {
  func1: function () {
    return 1;
  },
  func2: function () {
    return 2;
  },
  func3: function () {
    return 3;
  },
};
console.log(obj.func1() + obj.func2() + obj.func3());

// Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. Выведите в консоль сумму результатов функций.
test(
  function () {
    return 1;
  },
  function () {
    return 2;
  },
  function () {
    return 3;
  }
);
function test(func1, func2, func3) {
  console.log(func1() + func2() + func3());
}

// Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
function test1(func11, func21, func31) {
  return func11() + func21() + func31();
}

// Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3. Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
function func11() {
  return 1;
}
function func21() {
  return 2;
}
function func31() {
  return 3;
}
test1(func11, func21, func31);

// Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
let func12 = function () {
  return 1;
};
let func22 = function () {
  return 2;
};
let func32 = function () {
  return 3;
};

// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.
function func13() {
  return function () {
    return 1;
  };
}
function func23() {
  return function () {
    return 2;
  };
}
console.log(func13()() + func23()());

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
function func14(num) {
  return function (num1) {
    return function (num2) {
      return num + num1 + num2;
    };
  };
}
console.log(func14(2)(3)(4));

// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
function func15(num) {
  return function (num1) {
    return function (num2) {
      return function (num3) {
        return function (num4) {
          return [num, num1, num2, num3];
        };
      };
    };
  };
}
console.log(func15(2)(3)(4)(5)());

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:
(function (num) {
  return function (num1) {
    console.log(num + num1);
  };
})(1)(2);

// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
