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
/*
  const heading = document.querySelector('.art > h1');
  const img = document.querySelector('.art > img');
  const span = document.querySelector('.art > p > span');
*/
const art = document.querySelector('.art');

const heading = art.querySelector('h1');
const img = art.querySelector('img');
const span = art.querySelector('p > span');

console.log(heading, img, span);

