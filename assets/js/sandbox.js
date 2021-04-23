"use strict";

const btns = document.querySelectorAll("#root > button");


const clickHandler = ({target: {
  parentNode,
  dataset: {
    color,
  }
}}) => {
  parentNode.style.backgroundColor = color;
};

for (const btn of btns) {
  btn.dataset.someAttr = 'some text';
  btn.addEventListener("click", clickHandler);
}
/*
  По клику на кнопку менять фон родительского элемента (div#root)
*/

/*
  Add styles:
  target.style.background = 'rgb(200, 200, 255)';
  target.style.padding = '20px';
  target.style = 'background: rgb(255, 100, 100); padding-left: 30px;'
*/
