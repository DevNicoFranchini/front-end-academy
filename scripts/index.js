const allNavigationLinks = Array.from(
	document.getElementsByClassName('nav-list-item')
);
const hamburgerToggle = document.getElementById('hamburger-toggle');
allNavigationLinks.forEach((element) => {
	element.onclick = () => {
		hamburgerToggle.click();
	};
});
