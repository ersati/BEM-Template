const buttons = document.querySelectorAll(".article__button");
const articles = document.querySelectorAll(".article__invisible");

const changeButton = ({
    target
}) => {
    const activeArticle = target.previousElementSibling
    const activeButton = target
    console.log(target.previousElementSibling)
    activeArticle.classList.toggle("article__invisible--active");
    if (activeArticle.classList.contains("article__invisible--active")) {
        activeButton.textContent = "Hide";
    } else {
        activeButton.textContent = "Read More";
    }
}

buttons.forEach(button => {
    button.addEventListener('click', changeButton)
})