let optionBtn;
let menuBtns;
let menuSingleBtn;
const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};
const prepareDOMElements = () => {
	optionBtn = document.querySelector(".fa-gear");
	menuBtns = document.querySelector(".buttons");
	menuSingleBtn = document.querySelectorAll(".menu-btn");
};
const showOptions = () => {
	if (window.matchMedia("(max-width: 680px)").matches) {
		menuSingleBtn.forEach(e => {
			e.classList.toggle("wrap-animation");
		});
		optionBtn.classList.toggle("active");
	}
};
const prepareDOMEvents = () => {
	optionBtn.addEventListener("click", showOptions);
};

document.addEventListener("DOMContentLoaded", main);
