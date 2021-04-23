const imageDB = [
  "https://www.w3schools.com/bootstrap/chicago.jpg",
  "https://www.w3schools.com/bootstrap/ny.jpg",
  "https://www.w3schools.com/bootstrap/la.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png",
  "https://html5css.ru/css/img_lights.jpg",
  "./assets/images/img1.jpg",
];

const slider = new Slider(imageDB);

const [slideImage, sliderImage2] = document.querySelectorAll(".slide");
const [prevButton, nextButton] = document.querySelectorAll(
  ".slider-container > button"
);



const srcAttr = document.createAttribute('src');
slideImage.setAttributeNode(srcAttr);

const updateView = (imgLink) => {
  //slideImage.setAttribute("src", imgLink);
  srcAttr.value = imgLink;
}



updateView(slider.currentSlide);

const createButtonHandler = (action = "next") => {
  return () => {
  const newImage = slider[action]();
  updateView(newImage);
  }
};

prevButton.addEventListener("click", createButtonHandler("prev"));
nextButton.addEventListener("click", createButtonHandler("next"));

/*
prevButton.addEventListener("click", () => {
  const newImage = slider.prev();
  updateView(newImage);
});

nextButton.addEventListener("click", () => {
  const newImage = slider.next();
  updateView(newImage);
});*/

