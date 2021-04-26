"use strict";

const cardContainer = document.getElementById("root");

const cardElements = data.map((place) => createPlaceCard(place));

cardContainer.append(...cardElements);

function createPlaceCard(place) {
  const card = document.createElement("li");
  card.classList.add("cardWrapper");

  const container = document.createElement("article");
  container.classList.add("cardContainer");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("cardImageWrapper");
  imageWrapper.style.backgroundColor = stringToColor(place.name|| "")

  const initials = document.createElement('div');
  initials.classList.add('initials');
  //initials.innerText = place.name[0];
  initials.append(document.createTextNode(place.name[0] || ""));

  const img = document.createElement('img');
  img.classList.add('cardImage');
  img.src = place.profilePicture;
  img.hidden = true;

  img.addEventListener('error', handleImageError);
  img.addEventListener('load', handleImageLoad);

  imageWrapper.append(initials, img);

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("contentWrapper");

  const name = document.createElement('h3');
  name.classList.add("cardName");
  name.append(document.createTextNode(place.name || ""));

  const description = document.createElement("p");
  description.classList.add("cardDescription");
  description.append(document.createTextNode(place.description || ""));

  contentWrapper.append(name, description);

  container.append(imageWrapper, contentWrapper);
  card.append(container);

  return card;
}

/*
  EVENT HANDLERS
*/

function handleImageError({target}){
  target.remove();
}

function handleImageLoad({target}){
  target.hidden = false;
}


/*
  UTILS
*/

function stringToColor(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = '#';
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }
  return colour;
}