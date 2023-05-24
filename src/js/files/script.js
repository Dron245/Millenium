// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const img =document.querySelectorAll('.certificate__img');

img.forEach(el => {
	if (window.innerWidth < 768) {
		el.classList.add('-ibg')
	} else (el.classList.remove('-ibg'))
});