"use strict";
// Задание №1. Сделайте калькулятор, который будет находить площадь и периметр квадрата.
let cube = document.querySelector(".cube");
let cube_c = document.querySelector(".cube-c");
let cube_s = document.querySelector(".cube-s");
let cube_total_c = document.querySelector(".cube-total-c");
let cube_total_s = document.querySelector(".cube-total-s");

cube_s.addEventListener("click", function () {
  cube_total_s.textContent = Number(cube.value) * Number(cube.value);
});
cube_c.addEventListener("click", function () {
  cube_total_c.textContent = Number(cube.value) * 4;
});
// Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

// Сделайте калькулятор, который будет находить площадь круга и длину окружности.

// Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.
