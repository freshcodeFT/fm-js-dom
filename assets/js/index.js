"use strict";

const cardContainer = document.getElementById("root");

const cardElements = data.map((place) => createPlaceCard(place));
cardContainer.append(...cardElements);

function createPlaceCard(place) {

  const imageWrapper = createImageWrapper(place);
  const contentWrapper = createContentWrapper(place);

  // article.cardContainer
  const container = createElement(
    "article",
    { classNames: ["cardContainer"] },
    imageWrapper,
    contentWrapper
  );

  // li.cardWrapper
  const card = createElement("li", { classNames: ["cardWrapper"] }, container);

  return card;
}

function createImageWrapper({name, profilePicture}) {

  // div.initials
  const initials = createElement(
    "div",
    { classNames: ["initials"] },
    document.createTextNode(name[0] || "")
  );

  //img.cardImage
  const img = createElement("img", {
    classNames: ["cardImage"],
    handlers: {
      error: handleImageError,
      load: handleImageLoad,
    },
  });
  img.src = profilePicture;
  img.hidden = true;

  // div.cardImageWrapper
  const imageWrapper = createElement(
    "div",
    {
      classNames: ["cardImageWrapper"],
    },
    initials,
    img
  );
  imageWrapper.style.backgroundColor = stringToColor(name || "");

  return imageWrapper;
}

function createContentWrapper({name, description}){
  //h3.cardName
  const cardName = createElement(
    "h3",
    { classNames: ["cardName"] },
    document.createTextNode(name || "")
  );

  //p.cardDescription
  const cardDescription = createElement(
    "p",
    { classNames: ["cardDescription"] },
    document.createTextNode(description || "")
  );

  //div.contentWrapper
  const contentWrapper = createElement(
    "div",
    {
      classNames: ["contentWrapper"],
    },
    cardName,
    cardDescription
  );
  return contentWrapper;
}

/**
 *
 * @param {string} tagName
 * @param {object} options
 * @param {string[]} options.classNames - css classes
 * @param {object} options.handlers - event handlers
 * @param  {...Node} children
 * @returns {HTMLElement}
 */
function createElement(
  tagName,
  { classNames = [], handlers = {} },
  ...children
) {
  const elem = document.createElement(tagName);
  elem.classList.add(...classNames);

  for (const [eventType, eventHandler] of Object.entries(handlers)) {
    elem.addEventListener(eventType, eventHandler);
  }

  elem.append(...children);
  return elem;
}

/*
  EVENT HANDLERS
*/

function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({ target }) {
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
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}
