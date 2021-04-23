"use strict";

const btns = document.querySelectorAll(".link-button");

for (const btn of btns) {
  btn.addEventListener(
    "click",
    ({
      target: {
        dataset: { link, port },
      },
    }) => {
      console.log(`${link}:${port}`);
    }
  );
}

const uniqueButton = document.querySelector('#unique');

uniqueButton.addEventListener('click', ({target})=>{ 
  console.dir(target);
  /*target.style.background = 'rgb(200, 200, 255)';
  target.style.padding = '20px';*/
  target.style = 'background: rgb(255, 100, 100); padding-left: 30px;'
});