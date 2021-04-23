'use strict';


const [btn1, btn2] = document.querySelectorAll('.changing-button');

/*function createBtnHandler(clicksAmount = 5) {
  const btnHandler = ({ target: targetBtn }) => {

    if (clicksAmount <= 0) {
      targetBtn.removeEventListener("click", btnHandler);
      return;
    }

    alert("success");
    clicksAmount--;
  };
  return btnHandler;
}*/


/*
 Поменять местами содержимое 
 двух кнопок по наведению.
 */

const btnEnterHandler = () => {
  [btn1.innerText, btn2.innerText] = [btn2.innerText, btn1.innerText];
}

btn1.addEventListener('mouseenter', btnEnterHandler);
btn2.addEventListener('mouseenter', btnEnterHandler);

// for (const btn of btns){
//   btn.addEventListener('mouseenter', ({target})=>{
//    target.innerText = 'Changed';
//   });
// }