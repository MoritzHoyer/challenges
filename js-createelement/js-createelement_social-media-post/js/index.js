console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPostSection = document.createElement("section");
newPostSection.classList.add("post");

const newPostContent = document.createElement("p");
newPostSection.classList.add("post__content");
newPostContent.textContent = "Here is a new post for social media.";

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@username";

const newLikeButton = document.createElement("button");
newLikeButton.classList.add("post__button");
newLikeButton.type = "button";
newLikeButton.setAttribute("data-js", "like-button");
newLikeButton.textContent = "♥ Like";

newPostSection.append(newPostContent);
newPostSection.append(newPostFooter);
newPostFooter.append(newPostUsername);
newPostFooter.append(newLikeButton);

newLikeButton.addEventListener("click", handleLikeButtonClick);

document.body.append(newPostSection);
