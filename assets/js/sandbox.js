'use strict';

const btn = document.querySelector("#unique");
const btn2 = document.querySelector("#unique2");

function createBtnHandler(clicksAmount = 5) {
  const btnHandler = ({ target: targetBtn }) => {

    if (clicksAmount <= 0) {
      targetBtn.removeEventListener("click", btnHandler);
      return;
    }

    alert("success");
    clicksAmount--;
  };
  return btnHandler;
}

//const btnHandler = createBtnHandler(3);

/*btn.addEventListener("click", btnHandler);
btn2.addEventListener("click", btnHandler);*/

/*
const btnHandler = (e)=>{
  console.group();
  console.log(e);
  console.log(e.target);
  console.log(e.currentTarget);
  console.groupEnd();
};

btn.addEventListener("click",btnHandler);

window.addEventListener("click", btnHandler);
document.addEventListener("click", btnHandler);
document.body.addEventListener("click", btnHandler);*/
