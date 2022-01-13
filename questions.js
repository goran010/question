const answers = document.querySelectorAll("p");
const buttons = document.querySelectorAll("button");
const answersList = Array.prototype.slice.call(answers);
const buttonsList = Array.prototype.slice.call(buttons);
for (let button of buttonsList) {
    button.addEventListener("click", () => {
        answers[buttonsList.indexOf(button)].classList.toggle("visible");
    })
}

