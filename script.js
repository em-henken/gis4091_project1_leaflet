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
$.getJSON("https://raw.githubusercontent.com/em-henken/gis4091_project1_leaflet/main/Public_Schools_Points_2011-2012A.json", function (data) {
  console.log(data)

  L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { color: 'blue' });
    }
  }).addTo(map);
});
