const btn = document.querySelector("#unique");

/*function createBtnHandler(clicksAmount = 5) {
  const btnHandler = () => {
    alert("success");
    clicksAmount--;
    if (clicksAmount === 0) {
      btn.removeEventListener("click", btnHandler);
    }
  };
  return btnHandler;
}*/

//btn.addEventListener("click", createBtnHandler(3));

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
document.body.addEventListener("click", btnHandler);