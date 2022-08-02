
const menuButton = document.querySelector('#menuButton');
const navMenu = document.querySelector('#navMenu');

menuButton.addEventListener('click', () => {
	const hidden = navMenu.classList.contains('hidden');
	hidden ? navMenu.classList.remove('hidden') : navMenu.classList.add('hidden');
})
