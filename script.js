var map = L.map('map').setView([40.7826, -73.9656], 10);

  // load a tile layer
L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
$.getJSON({url:"https://raw.githubusercontent.com/em-henken/gis4091_project1_leaflet/main/new-york-city-boroughs.geojson", dataType: "json"},function (data) {
  L.geoJson(data, {
    style: function (feature, latlng) {
      return {color:'blue'};
    }
  }).addTo(map);
});

$.getJSON("https://raw.githubusercontent.com/em-henken/gis4091_project1_leaflet/main/districts1.geojson",function (data) {
  L.geoJson(data, {
    style: function (feature, latlng) {
      return {color:'black'};
    }
  }).addTo(map);
});

var popup = L.popup()
    .setLatLng([40.7826, -74.056])
    .setContent("New York City Bouroughs and Schools Districts")
    .openOn(map);
