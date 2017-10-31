var Copyright = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

var map001 = L.map('main').setView([36.405394, 139.330479], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: Copyright
}).addTo(map001);
