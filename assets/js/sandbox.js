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
