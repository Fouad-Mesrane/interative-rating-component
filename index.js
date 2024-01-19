const submitBtn = document.querySelector("#submit-btn");
const buttons = document.getElementsByClassName("btn");
const selectedBtn = document.querySelector(".selected-btn");
const ratingContent = document.querySelector(".rating-content");
const thankYouContainer = document.querySelector(".thank-you-container");
let currentButton = 1;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    for (let j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
      buttons[i].classList.add("active");
    }
    currentButton = buttons[i].textContent;
    selectedBtn.textContent = currentButton;
  });
}

submitBtn.addEventListener("click", function () {
  ratingContent.classList.add("hidden");
  thankYouContainer.classList.remove("hidden");
});
