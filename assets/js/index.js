"use strict";

const cardContainer = document.getElementById("root");

const cardElements = data.map((place) => createPlaceCard(place));
cardContainer.append(...cardElements);

function createPlaceCard(place) {
  return createElement(
    "li",
    { classNames: ["cardWrapper"] },
    // article.cardContainer
    createElement(
      "article",
      { classNames: ["cardContainer"] },
      createImageWrapper(place),
      createContentWrapper(place)
    )
  );
}

function createCardImage(link) {
  const img = createElement("img", {
    classNames: ["cardImage"],
    handlers: {
      error: handleImageError,
      load: handleImageLoad,
    },
  });
  img.src = link;
  img.hidden = true;

  return img;
}

function createImageWrapper({ name, profilePicture }) {
  // div.cardImageWrapper
  const imageWrapper = createElement(
    "div",
    {
      classNames: ["cardImageWrapper"],
    },
    // div.initials
    createElement(
      "div",
      { classNames: ["initials"] },
      document.createTextNode(name[0] || "")
    ),
    createCardImage(profilePicture)
  );
  imageWrapper.style.backgroundColor = stringToColor(name || "");

  return imageWrapper;
}

function createContentWrapper({ name, description }) {
  return createElement(
    "div",
    {
      classNames: ["contentWrapper"],
    },
    // h3.cardName
    createElement(
      "h3",
      { classNames: ["cardName"] },
      document.createTextNode(name || "")
    ),
    // p.cardDescription
    createElement(
      "p",
      { classNames: ["cardDescription"] },
      document.createTextNode(description || "")
    )
  );
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
