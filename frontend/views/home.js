const template = require("./template");

function getImage(image) {
  return `
    <div class="image">
      <a href="/images/${image.id}">
        <img src="${image.url}" />
      </a>
      <div class="meta">
        <div class="author">👤 ${0 /*image.user.username*/}</div>
        <div class="comments">💬 ${0 /*image.comments.length*/}</div>
      </div>
    </div>
  `;
}

function getImages(images) {
  return images.map(getImage).join("");
}

function getNewImage(user) {
  if (!user) {
    return "";
  }

  return `
    <div class="image new-image">
      <a href="/images/new">+</a>
    </div>
  `;
}

module.exports = ({ user, images = [] }) => {
  return template(
    { user },
    `
      <div class="images">
        ${getImages(images)}
        ${getNewImage(user)}
      </div>
    `
  );
};
