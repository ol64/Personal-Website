const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

//display mobile menu
const mobileMenu = () => {
	menu.classList.toggle('is-active');
	menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const hideMenu = (evt) => {
	let isClickedInside =
		menu.contains(evt.target) || menuLinks.contains(evt.target);

	if (!isClickedInside) {
		menu.classList.remove('is-active');
		menuLinks.classList.remove('active');
	}
};

document.addEventListener('click', hideMenu);

// //toggle page from navbar
// const toggleActivePage = (evt) => {
// 	let allPages = document.querySelectorAll('.navbar_link');
//   let id = evt.target.href;
//   let
// 	console.log(allPages);
// 	[...allPages].map((page) => {
// 		if (page !== evt.target) page.classList.remove('active');
// 		else {
// 			evt.target.classList.add('active');
// 		}
// 	});
// 	console.log(allPages);
// };

// menuLinks.addEventListener('click', toggleActivePage);

//Map
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© OpenStreetMap',
}).addTo(map);
