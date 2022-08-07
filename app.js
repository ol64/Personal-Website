//audio
const button = document.querySelector('#bgm');
const icon = document.querySelector('#bgm > i');
const audio = document.querySelector('audio');

button.addEventListener('click', () => {
	if (audio.paused) {
		audio.volume = 0.2;
		audio.play();
		icon.classList.remove('fa-volume-up');
		icon.classList.add('fa-volume-mute');
	} else {
		audio.pause();
		icon.classList.remove('fa-volume-mute');
		icon.classList.add('fa-volume-up');
	}
	button.classList.add('fade');
});

//display mobile menu
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
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

//Map
var map = L.map('map').setView([40.6932363, -73.9848], 3);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '© OpenStreetMap',
}).addTo(map);

var nYC = L.marker([40.6932363, -73.9848]).addTo(map);
var amsterdam = L.marker([52.3770361, 4.8986806]).addTo(map);
var salamanca = L.marker([40.9650389, -5.6643833]).addTo(map);
var madrid = L.marker([40.4222528, -3.6996306]).addTo(map);
var roma = L.marker([41.8901301, 12.4726551]).addTo(map);
var positano = L.marker([40.627675, 14.4853502]).addTo(map);
var porto = L.marker([41.1378444, -8.6131083]).addTo(map);
var london = L.marker([51.5067556, -0.084875]).addTo(map);
var barcelona = L.marker([41.3893556, 2.1864472]).addTo(map);
var santander = L.marker([43.4663556, -3.8051806]).addTo(map);
var cancun = L.marker([20.5862722, -87.1101306]).addTo(map);
var sanDiego = L.marker([32.7312278, -117.1500694]).addTo(map);
var biscay = L.marker([43.4454194, -2.7841083]).addTo(map);
var firenze = L.marker([43.7632139, 11.2638194]).addTo(map);
var bilbao = L.marker([43.2691, -2.9346417]).addTo(map);
var washington = L.marker([38.8895944, -77.0153417]).addTo(map);

// markers on map
var markers = {
	nYC: [nYC, 'New York'],
	amsterdam: [amsterdam, 'Netherlands'],
	salamanca: [salamanca, 'Spain'],
	madrid: [madrid, 'Spain'],
	roma: [roma, 'Italy'],
	positano: [positano, 'Italy'],
	porto: [porto, 'Portugal'],
	london: [london, 'UK'],
	barcelona: [barcelona, 'Spain'],
	santander: [santander, 'Spain'],
	cancun: [cancun, 'Mexico'],
	sanDiego: [sanDiego, 'California'],
	biscay: [biscay, 'Spain'],
	firenze: [firenze, 'Italy'],
	bilbao: [bilbao, 'Spain'],
	washington: [washington, 'D.C.'],
};

let image = document.getElementById('destination');
let caption = document.querySelector('.polaroid h3');

for (const destination in markers) {
	markers[destination][0].on('click', function () {
		image.src = `destinations/${destination}.jpeg`;

		let location = destination.split('');
		caption.innerHTML = `${
			location.shift().toUpperCase() + location.join('')
		}, ${markers[destination][1]}`;
	});
}
