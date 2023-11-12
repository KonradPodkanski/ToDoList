let optionBtn;
// let menuBtns;

let menuSingleBtn;
let noteSection;
let dropDownMenu;
let addTaskPopUp;
const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};
const prepareDOMElements = () => {
	optionBtn = document.querySelector(".fa-gear");
	// menuBtns = document.querySelector(".buttons");

	menuSingleBtn = document.querySelectorAll(".menu-btn");
	noteSection = document.querySelector(".bottom-note-section");
	dropDownMenu = document.querySelector(".dropdown-menu");
	addTaskPopUp = document.querySelector(".add-task-pop-up");
};
const prepareDOMEvents = () => {
	optionBtn.addEventListener("click", showOptions);
	noteSection.addEventListener("click", removeNote);
	dropDownMenu.addEventListener("click", openSelectedOption);
	addTaskPopUp.addEventListener("click", taskMenuEvents);
};
const showOptions = () => {
	if (window.matchMedia("(max-width: 740px)").matches) {
		menuSingleBtn.forEach(e => {
			e.classList.toggle("wrap-animation");
		});
		dropDownMenu.classList.toggle("active-color");
		optionBtn.classList.toggle("active");
	}
};
const removeNote = e => {
	if (e.target.classList.contains("fa-trash")) {
		e.target.closest(".note").remove();
	}
};
const openSelectedOption = e => {
	if (e.target.classList.contains("fa-plus")) {
		addTaskPopUp.classList.add("active-pop-up");
	}
};
const taskMenuEvents = e => {
	if (e.target.classList.contains("cancel")) {
		addTaskPopUp.classList.remove("active-pop-up");
		showOptions();
	}
};
document.addEventListener("DOMContentLoaded", main);
