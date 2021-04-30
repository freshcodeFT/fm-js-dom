"use strict";

const url = new URL("https://www.instagram.com/therock/?hl=ru");
//console.log(url.hostname);

function createLinks(contacts) {
  return contacts.map((contact) => {
    const url = new URL(contact);
    return createElement("a", {
      attributes: { href: contact },
      classNames: [SOCIAL_ICONS_MAP.get(url.hostname) || "fa-adn", "fab", 'socialLink'],
    });
  });
}