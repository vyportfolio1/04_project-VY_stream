const burgerIcon = document.querySelector(".fa-bars");
const xIcon = document.querySelector(".fa-x");
const slideMeniu = document.querySelector(".slide-meniu");

burgerIcon.addEventListener("click", () => {
    slideMeniu.classList.remove("invisible");
 
});

xIcon.addEventListener("click", () => {
    slideMeniu.classList.add("invisible");
 
});