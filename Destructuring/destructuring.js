"use strict";
// Переделайте этот код через деструктуризацию согласно изученной теории.
let arr = ["John", "Smit", "development", "programmer", 2000];
let [name, surname, department, position, salary] = arr;

// Переделайте этот код через деструктуризацию согласно изученной теории.
function func() {
  return ["John", "Smit", "development", "programmer", 2000];
}
let [name1, surname1, department1, position1, salary1] = func();

// Переделайте этот код через деструктуризацию согласно изученной теории.
let [, , development2, position2] = arr;

// Переделайте этот код через деструктуризацию согласно изученной теории.
let [name3, surname3, ...info] = arr;

// Переделайте этот код через деструктуризацию согласно изученной теории.
let arr1 = ["John", "Smit", "development", "programmer"];
let [name4, surname4, department4, position4 = "trainee"] = arr1;

// Переделайте этот код через деструктуризацию согласно изученной теории.
let options = {
  color: "red",
  width: 400,
  height: 500,
};
let { color, width, height } = options;

// Переделайте этот код через деструктуризацию согласно изученной теории.
let options1 = {
  width1: 400,
  height1: 500,
};
let { color1 = "black", width1, height1 } = options1;

// Переделайте этот код через деструктуризацию согласно изученной теории.
let options2 = {
  width2: 400,
  height2: 500,
};
let { color2: c = "black", width2, height2 } = options2;

// Переделайте следующий код через деструктуризацию согласно изученной теории.
function func1([name, surname, department, position, salary]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
  console.log(salary);
}
func1(["John", "Smit", "development", "programmer", 2000]);

// Переделайте следующий код через деструктуризацию согласно изученной теории.
function func2([name, surname, department, position = "джуниор"]) {
  console.log(name);
  console.log(surname);
  console.log(department);
  console.log(position);
}
func2(["John", "Smit", "development"]);
