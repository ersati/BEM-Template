const button = document.querySelector(".article__button");
const article = document.querySelector(".article__invisible");

const addClass = () => {
  article.classList.toggle("article__invisible--active");
  button.classList.toggle("article__button--invisible");
};
button.addEventListener("click", addClass);
