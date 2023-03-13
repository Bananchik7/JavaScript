"use strict";
// Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
let element = document.querySelector("#element");
let element1 = document.querySelector("#element1");
element.addEventListener("blur", function () {
  element1.textContent = element1.textContent + this.value;
});

// Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
let element2 = document.querySelector("#element2");
let element3 = document.querySelector("#element3");
let element4 = document.querySelector("#element4");
let button = document.querySelector("#button");
button.addEventListener("click", function () {
  element4.textContent = Number(element2.value) + Number(element3.value);
});

// Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
let element5 = document.querySelector("#element5");
element5.addEventListener("blur", function () {
  let string = String(this.value);
  let arr = string.split("");
  let sum = 0;
  for (let digit of arr) {
    sum += Number(digit);
  }
  this.value = sum;
});

// Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
let element6 = document.querySelector("#element6");
element6.addEventListener("blur", function () {
  let string = String(this.value);
  let arr = string.split(",");
  let sum = 0;
  for (let digit of arr) {
    sum += Number(digit);
  }
  sum = sum / arr.length;
  this.value = sum;
});

// Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
let element7 = document.querySelector("#element7");
let element8 = document.querySelector("#element8");
let element9 = document.querySelector("#element9");
let element10 = document.querySelector("#element10");
element7.addEventListener("blur", function () {
  let array = this.value.split(" ");
  element8.value = array[0];
  element9.value = array[1];
  element10.value = array[2];
});

// Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
let element11 = document.querySelector("#element11");
element11.addEventListener("blur", function () {
  let words = this.value.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
  }
  let result = words.join(" ");
  this.value = result;
});

// Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
let element12 = document.querySelector("#element12");
element12.addEventListener("blur", function () {
  let words = this.value.split(" ");
  let sum = 0;
  for (let elem of words) {
    sum++;
  }
  this.value = sum;
});

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
let element13 = document.querySelector("#element13");
element13.addEventListener("blur", function () {
  let words = this.value.split(".");
  this.value = words.join("-");
});

// Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
let element14 = document.querySelector("#element14");
element14.addEventListener("blur", function () {
  let array = this.value.split("");
  let array2 = this.value.split("").reverse();
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array2[i]) {
      this.value = "No";
    } else {
      this.value = "Yes";
    }
  }
});

// Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
let element15 = document.querySelector("#element15");
element15.addEventListener("blur", function () {
  let array = this.value.split("");
  for (let elem of array) {
    if (Number(elem) === 3) {
      this.value = "Yes";
    } else {
      this.value = "No";
    }
  }
});

// Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
let button1 = document.querySelector("#button1");
let elements = document.querySelectorAll("#text");
button1.addEventListener("click", function () {
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = elements[i].innerHTML + (i + 1);
  }
});

// Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
let elements1 = document.querySelectorAll("#href");
for (let i = 0; i < elements1.length; i++) {
  elements1[i].innerHTML =
    elements1[i].innerHTML + "(" + elements1[i].href + ")";
}

// Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
let elements2 = document.querySelectorAll("#href1");
for (let i = 0; i < elements2.length; i++) {
  if (elements2[i].href.indexOf("http://") == 0) {
    elements2[i].innerHTML += String.fromCharCode(8594);
  }
}
// Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
let element16 = document.querySelector("#element16");
let element17 = document.querySelector("#element17");
let element18 = document.querySelector("#element18");
element16.addEventListener("click", func);
element17.addEventListener("click", func);
element18.addEventListener("click", func);
function func() {
  this.textContent = Number(this.textContent) * Number(this.textContent);
}

// Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
let element19 = document.querySelector("#element19");
let element20 = document.querySelector("#element20");
element19.addEventListener("blur", Day);
function Day() {
  let dayWeek = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
  ];
  let arr = element19.value.split(".");
  arr.reverse();
  let date = new Date(Number(arr[0]), Number(arr[1]) - 1, Number(arr[2]));

  element20.innerHTML =
    "день недели:" + date.getDay() + " - " + dayWeek[date.getDay()];
}

// Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
let element21 = document.querySelector("#element21");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
button2.addEventListener("click", function () {
  element21.value = Number(element21.value) + 1;
});
button3.addEventListener("click", function () {
  element21.value = Number(element21.value) - 1;
});

// Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
let element22 = document.querySelector("#element22");
let element23 = document.querySelector("#element23");
let element24 = document.querySelector("#element24");
element23.addEventListener("click", clickNumber);
element24.addEventListener("click", clickNumber);
function clickNumber() {
  element22.value = Number(element22.value) + 1;
}

// На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста.
let element25 = document.querySelectorAll("#element25");
let button4 = document.querySelector("#button4");
button4.addEventListener("click", symbol10);
function symbol10() {
  for (let i = 0; i < element25.length; i++) {
    element25[i].textContent = element25[i].textContent.slice(0, 20) + "...";
  }
}

// Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
let element26 = document.querySelector("#element26");
element26.addEventListener("blur", color);
function color() {
  if (element26.value <= 100) {
    element26.style.background = "green";
  } else {
    element26.style.background = "red";
  }
}

// Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
let element27 = document.querySelector("#element27");
let button5 = document.querySelector("#button5");
button5.addEventListener("click", function () {
  let symbol = "0123456789йцукенгшщзхъфывапролджэёячсмитьбю";
  let str = "";
  for (let i = 0; i < 8; i++) {
    str += symbol.charAt(Math.floor(Math.random() * symbol.length));
    element27.value = str;
  }
});

// Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
let element28 = document.querySelector("#element28");
let button6 = document.querySelector("#button6");
button6.addEventListener("click", random);
function random() {
  let str = "";
  for (let i = 0; i < 8; i++) {
    str += element28[i].charAt(Math.floor(Math.random() * element28[i].length));
    element28.value = str;
  }
}

// Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.

// Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.

// Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
