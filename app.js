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
var map = L.map('map').setView([40.6932363, -73.9848], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© OpenStreetMap',
}).addTo(map);

var NYC = L.marker([40.6932363, -73.9848]).addTo(map);
var amsterdam = L.marker([52.3770361, 4.8986806]).addTo(map);
var salamanca = L.marker([40.9650389, -5.6643833]).addTo(map);
var madrid = L.marker([40.4222528, -3.6996306]).addTo(map);
var rome = L.marker([41.8901301, 12.4726551]).addTo(map);
var positano = L.marker([40.627675, 14.4853502]).addTo(map);
var porto = L.marker([41.1378444, -8.6131083]).addTo(map);
var london = L.marker([51.5067556, -0.084875]).addTo(map);
var barcelona = L.marker([41.3893556, 2.1864472]).addTo(map);
var santander = L.marker([43.4663556, -3.8051806]).addTo(map);
var cancun = L.marker([20.5862722, -87.1101306]).addTo(map);
var sanDiego = L.marker([32.7312278, -117.1500694]).addTo(map);

// home
// 	.bindPopup("<img src='destinations/nyc.jpeg' style='width: auto'/>NYC, NY")
// 	.openPopup();

var markers = {
	NYC: NYC,
	amsterdam: amsterdam,
	salamanca: salamanca,
	madrid: madrid,
	rome: rome,
	positano: positano,
	porto: porto,
	london: london,
	barcelona: barcelona,
	santander: santander,
	cancun: cancun,
	sanDiego: sanDiego,
};

let image = document.getElementById('destination');
let caption = document.querySelector('.polaroid h3');

for (const destination in markers) {
	markers[destination].on('click', function () {
		image.classList.add('fade-in-image');
		image.src = `destinations/${destination}.jpeg`;

		let location = destination.split('');
		caption.innerHTML = `${
			location.shift().toUpperCase() + location.join('')
		} `;
	});
}
