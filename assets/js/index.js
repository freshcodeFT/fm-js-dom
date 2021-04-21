//const [firstButton, secondButton] = document.getElementsByTagName('button');

function alertOnClick() {
  alert("Success");
}

//firstButton.addEventListener('click', alertOnClick);

/*
// Выбирает все элементы по тегу
document.getElementsByTagName 

// Выбирает все элементы по названию класса
document.getElementsByClassName 

// Выбирает элемент по его id
document.getElementById 

// Выбирает все элементы, которые соответствуют css селектору
document.querySelectorAll('#list > li > span') 

// Выбирает первый найденный элемент, который соответствует css селектору
document.querySelector
*/

/*const buttons = [...document.getElementsByClassName('main-button')];

buttons.forEach((elem) => {
  elem.addEventListener('click', alertOnClick);
});
*/

const mainSection = document.querySelector(".main-section");
console.log(mainSection);

const buttons = document.querySelectorAll(".main-button");

for (elem of buttons) {
  elem.addEventListener("click", alertOnClick);
}

const par = document.querySelector("#unique");
console.log(par);

const heading = document.querySelector(".main-section > h1");
console.log(heading);
