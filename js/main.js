
const burger = document.querySelector('.header__burger'), headerMenu = document.querySelector('.header__list');

burger.addEventListener('click', () => {
	burger.classList.toggle('header__burger-active');
	headerMenu.classList.toggle('header__list-active');
	document.querySelector('body').classList.toggle('close');
})

// Accordion----------------------------------------------------------

const footerItems = document.querySelectorAll('.item-footer');

footerItems.forEach((item, i) => {
	let content = item.querySelector('.item-footer__title').nextElementSibling;

	item.addEventListener('click', () => {
		item.classList.toggle('active');
		
		if(content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = content.scrollHeight + 'px';
		}
	})
})