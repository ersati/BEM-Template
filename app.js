const button = document.querySelector(".article__button");
const article = document.querySelector(".article__invisible");
const buttons = document.querySelectorAll(".article__button");
const articles = document.querySelectorAll(".article__invisible");

// const addClass = () => {
//   article.classList.toggle("article__invisible--active");

//   if (article.classList.contains("article__invisible--active")) {
//     button.textContent = "Hide";
//   } else {
//     button.textContent = "Read More";
//   }
// };
// button.addEventListener("click", addClass);

const addMultipleClasses = () => {
  articles.forEach((article) => {
    article.classList.toggle("article__invisible--active");
    if (article.classList.contains("article__invisible--active")) {
      button.textContent = "Hide";
    } else {
      button.textContent = "Read More";
    }
  });
};
buttons.forEach((button) => {
  button.addEventListener("click", addMultipleClasses);
});
