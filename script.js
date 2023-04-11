const submitBtn = document.querySelector("#submit");
const form = document.querySelector("#form");
const rating = document.querySelector("#your-rate")



form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const firstCard = document.querySelector("#rating-card");
    const secondCard = document.querySelector("#thanks-card");

    firstCard.style.display = "none";
    secondCard.style.display = "block"
})


const radioButtons = document.querySelectorAll('input[type = "radio"]');

radioButtons.forEach((element) => {
    element.addEventListener("click", () => {
        rating.innerHTML = (element.value)
        radioButtons.checked = false;
    })
})





