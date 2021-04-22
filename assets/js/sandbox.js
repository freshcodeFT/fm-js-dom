const btn = document.querySelector("#unique");

function createBtnHandler(clicksAmount = 5) {
  const btnHandler = () => {
    alert("success");
    clicksAmount--;
    if (clicksAmount === 0) {
      btn.removeEventListener("click", btnHandler);
    }
  };
  return btnHandler;
}

btn.addEventListener("click", createBtnHandler(3));

btn.dispatchEvent(new MouseEvent('click'));