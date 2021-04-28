"use strict";
const form = document.getElementById("root-form");
const list = document.getElementById("root-list");

form.addEventListener("submit", submitHandler);

const arr = [];

function submitHandler(event) {
  event.preventDefault();
  const {
    target,
    target: {
      elements: {
        email: { value: emailValue },
      },
    },
  } = event;
  const value = emailValue.trim();
  if (value && !arr.includes(value)) {
    arr.push(value);
    list.append(createListItem(value));
  }

  target.reset();
}

function createListItem(value) {
  const listItem = document.createElement("li");

  const btn = createDeleteListButton(deleteHandler.bind(value));
  listItem.append(document.createTextNode(value), btn);

  return listItem;
}

function createDeleteListButton(onDelete) {
  const btn = document.createElement("button");
  btn.innerText = "X";
  btn.addEventListener("click", onDelete);
  return btn;
}

function deleteHandler({ target: { parentNode } }) {
  console.log(this);
  arr.splice(arr.indexOf(this), 1);
  parentNode.remove();
}

/* 1. При каждом сабмите формы - пушить значение инпута в массив */
/* 2. Очищать форму после каждого сабмита */
/* 3. Рендерить на странице то, что было введено в форму */
/* 4. Валидация значения в инпуте при сабмите формы (На пустой инпут) */
/* 5. Добавить в элементы списка кнопку удаления, которая 
удалит этот li элемент и соответствующее значение в массиве. */
