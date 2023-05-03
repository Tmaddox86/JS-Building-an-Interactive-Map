// create map
const myMap = L.map('map', {
    center: [40.5737696, -74.1310528],
    zoom: 12,
});

// add openstreetmap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(myMap)

// create and main add geolocation marker
const marker = L.marker([40.5737696, -74.1310528])
marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

// draw the 2nd arrondissement
[41.4691605, --81.5344209]
[41.4656349, -81.5378186]
[41.4650093, -81.538489]
[41.4619635, -81.5350847] 
[41.4638359, -81.5343591]


// create red pin marker
// metro station markers
const rS = L.marker([40.5737696, -74.1310528]).bindPopup('house')
const sSD = L.marker([1.4691605, --81.534420]).bindPopup('thortan park')
const sentier = L.marker([41.4656349, -81.5378186]).bindPopup('Shaker Plaza')
const bourse = L.marker([41.4650093, -81.538489]).bindPopup('Donatos')
const qS = L.marker([41.4619635, -81.5350847]).bindPopup('University hospital')
const gB = L.marker([41.4638359, -81.5343591]).bindPopup('hotel')

const stations = L.layerGroup([rS, sSD, sentier, bourse, qS, gB]).addTo(myMap)


