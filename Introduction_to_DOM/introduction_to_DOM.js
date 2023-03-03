"use strict";
// Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.
let elem1 = document.querySelector("#elem1");
console.log(elem1);
let elem2 = document.querySelector("#elem2");
console.log(elem2);
let elem3 = document.querySelector("#elem3");
console.log(elem3);

// Получите ссылку на первый абзац из дива с id, равным block.
let elem = document.querySelector("#block");
console.log(elem);

// Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3.
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
button1.addEventListener("click", function () {
  console.log("1");
});
button2.addEventListener("click", function () {
  console.log("2");
});
button3.addEventListener("click", function () {
  console.log("3");
});

// Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
button4.addEventListener("click", func1);
button5.addEventListener("click", func2);
function func1() {
  console.log(1);
}
function func2() {
  console.log(2);
}

// Привяжите эту функцию ко всем 5-ти абзацам.
let elem4 = document.querySelector("#elem4");
let elem5 = document.querySelector("#elem5");
let elem6 = document.querySelector("#elem6");
let elem7 = document.querySelector("#elem7");
let elem8 = document.querySelector("#elem8");
elem4.addEventListener("click", func3);
elem5.addEventListener("click", func3);
elem6.addEventListener("click", func3);
elem7.addEventListener("click", func3);
elem8.addEventListener("click", func3);
function func3() {
  console.log("message");
}

// Дана кнопка. По двойному клику по ней выведите какое-нибудь сообщение.
let button6 = document.querySelector("#button6");
button6.addEventListener("dblclick", function () {
  console.log("Двойной клик");
});

// По наведению на нее выведите какое-нибудь сообщение.
button6.addEventListener("mouseover", function () {
  console.log("Наведение");
});

// По уходу курсора с нее выведите какое-нибудь сообщение.
button6.addEventListener("mouseout", function () {
  console.log("Уход");
});

// Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
let button7 = document.querySelector("#button7");
let elem9 = document.querySelector("#elem9");
button7.addEventListener("click", function () {
  console.log(elem9.textContent);
});

// Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.
button7.addEventListener("click", function () {
  console.log((elem9.textContent = "!!!"));
});

// Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. По нажатию на кнопку выведите на экран сумму хранящихся чисел.
let button8 = document.querySelector("#button8");
let elem10 = document.querySelector("#elem10");
let elem11 = document.querySelector("#elem11");
button8.addEventListener("click", function () {
  console.log(Number(elem10.textContent) + Number(elem11.textContent));
});

// Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
let button9 = document.querySelector("#button9");
let elem12 = document.querySelector("#elem12");
let elem13 = document.querySelector("#elem13");
let elem14 = document.querySelector("#elem14");
let element = document.querySelector("#element");
button9.addEventListener("click", function () {
  element.textContent =
    Number(elem12.textContent) +
    Number(elem13.textContent) +
    Number(elem14.textContent);
});

// Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
let elem15 = document.querySelector("#elem15");
let button10 = document.querySelector("#button10");
button10.addEventListener("click", function () {
  console.log(elem15.innerHTML);
});

// Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
let elem16 = document.querySelector("#elem16");
let button11 = document.querySelector("#button11");
button11.addEventListener("click", function () {
  console.log(elem16.type);
});

// Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.
button11.addEventListener("click", function () {
  console.log((elem16.type = "submit"));
});

// Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинки из ее атрибута src.
let elem17 = document.querySelector("#elem17");
let button12 = document.querySelector("#button12");
let image = document.querySelector("#image");
button12.addEventListener("click", function () {
  console.log((elem16.type = image.src));
});

// Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
let elem18 = document.querySelector("#elem18");
let button13 = document.querySelector("#button13");
button13.addEventListener("click", function () {
  elem18.value = "new text";
});

// Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
let elem19 = document.querySelector("#elem19");
elem19.addEventListener("focus", function () {
  console.log(elem19.value);
});
elem19.addEventListener("blur", function () {
  console.log((elem19.value = 2));
});

// Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.
let element1 = document.querySelector("#element1");
let button20 = document.querySelector("#button20");
button20.addEventListener("click", function () {
  console.log(element1.className);
});

// Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.
console.log(document.querySelector("#image1").src);

// Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. Для обращения у инпуту внутри функции-обработчика используйте объект this.
let elem20 = document.querySelector("#elem20");
elem20.addEventListener("focus", function () {
  this.value = "1";
});
elem20.addEventListener("blur", function () {
  this.value = "2";
});

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.
let button21 = document.querySelector("#button21");
button21.addEventListener("click", function () {
  this.value = 1 + Number(button21.value);
});

// Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.
let elem21 = document.querySelector("#elem21");
let elem22 = document.querySelector("#elem22");
let elem23 = document.querySelector("#elem23");
let elem24 = document.querySelector("#elem24");
let elem25 = document.querySelector("#elem25");
elem21.addEventListener("click", func4);
elem22.addEventListener("click", func4);
elem23.addEventListener("click", func4);
elem24.addEventListener("click", func4);
elem25.addEventListener("click", func4);
function func4() {
  this.textContent += "!";
}

// Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите их циклом и установите текст каждого абзаца в значение 'text'.
let elems = document.querySelectorAll(".www");
let button22 = document.querySelector("#button22");
button22.addEventListener("click", function () {
  for (let elem of elems) {
    elem.textContent = "text";
  }
});

// Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная выше функция.
let elems1 = document.querySelectorAll("input");
for (let elem of elems) {
  elem.addEventListener("blur", function () {
    this.value = Number(this.value) + 1;
  });
}

// Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, чтобы кнопка больше не реагировала на нажатие.
let button23 = document.querySelector("#button23");
button23.addEventListener("click", func5);
function func5() {
  if (Number(button23.value) < 10) {
    this.value = Number(this.value) + 1;
  } else {
    this.removeEventListener("click", func5);
  }
}

// Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. Сделайте так, чтобы это добавление происходило лишь по первому нажатию.
let elems2 = document.querySelectorAll("p");
for (let elem of elems2) {
  elem.addEventListener("click", func6);
}
function func6() {
  this.textContent = this.textContent + "!";
  this.removeEventListener("click", func6);
}

// Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.
let elems3 = document.querySelectorAll("li");
for (let elem of elems3) {
  elem.addEventListener("click", function func() {
    this.textContent = Number(this.textContent) + 1;
    this.removeEventListener("click", func);
  });
}

// Получите значение его атрибута value.
let elem26 = document.querySelector("#elem26");
let value = elem26.getAttribute("value");
console.log(value);

// Узнайте количество его классов.
let elem27 = document.querySelector("#elem27");
let length = elem27.classList.length;
console.log(length);

// Найдите первого потомка этого элемента и сделайте его текст красного цвета.
let elem28 = document.querySelector("#elem28");
let text = elem28.firstElementChild.innerHTML;
console.log(text);

// Найдите его родителя.
let elem29 = document.querySelector("#elem29");
let id = elem29.parentElement.id;
console.log(id);

// Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
let elem30 = document.querySelector("#elem30");
elem30.addEventListener("click", function () {
  this.textContent = this.textContent + this.dataset.text;
});

// Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
let elem31 = document.querySelector("#elem31");
elem31.addEventListener("click", function () {
  this.textContent =
    this.textContent +
    Number(this.dataset.productPrice) * Number(this.dataset.productAmount);
});

// Переберите циклом все узлы этого дива и выведите их в консоль.
let elem32 = document.querySelector("#elem32");
for (let node of elem32.childNodes) {
  console.log(node);
}
for (let node of elem32.tagName) {
  console.log(node);
}
