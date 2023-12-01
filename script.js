const links = document.querySelectorAll('#menu a');
const menu_btn = document.getElementById('menu_btn');

links.forEach((link) => {
	link.onclick = () => {
		menu_btn.classList.add('loading');
		window.setTimeout(() => {
			menu_btn.classList.remove('loading');
		}, 1200);
		return false;
	};
});