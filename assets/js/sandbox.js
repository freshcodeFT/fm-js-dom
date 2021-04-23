"use strict";

const btns = document.querySelectorAll("button");

const clickHandler = ({
  target: {
    dataset: { link, port },
  },
}) => {
  console.log(`${link}:${port}`);
};

for (const btn of btns) {
  btn.addEventListener("click", clickHandler);
}

/*
  Add styles:
  target.style.background = 'rgb(200, 200, 255)';
  target.style.padding = '20px';
  target.style = 'background: rgb(255, 100, 100); padding-left: 30px;'
*/
