const answers = document.querySelectorAll("p");
const buttons = document.querySelectorAll("button");
const answersList = Array.prototype.slice.call(answers);
const buttonsList = Array.prototype.slice.call(buttons);
for (let button of buttonsList) {
    button.addEventListener("click", () => {
        answers[buttonsList.indexOf(button)].classList.toggle("visible");
    })
}
document.addEventListener('keydown', (event) => {
    let code = event.code;
    if( code === "Digit1")
    {
        answers[0].classList.toggle("visible");
    }
    if (code === "Digit2") {
        answers[0].classList.toggle("visible");
    }
    if (code === "Digit3") {
        answers[0].classList.toggle("visible");
    }
});

