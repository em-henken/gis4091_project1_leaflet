var map = L.map('map').setView([37.7, -122.4], 10);

  // load a tile layer
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
$.getJSON("https://drive.google.com/file/d/1n8IPHFn1QwlE1bsY-8VhJIzn8VYoyvk5/view?usp=drive_link", function (data) {
  console.log(data)

  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { color: 'blue' });
    }
  }).addTo(map);
});
