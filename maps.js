let metroAreaCenterCoordinates = [41.65,  -106.34]

// Create the map 
let map = L.map('mctc-map').setView(metroAreaCenterCoordinates, 4)

// Add the tile layer - roads, streets etc. Without this, nothing to see 
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2xhcmFsIiwiYSI6ImNqcmdwenViYTAwcHQ0Ym5yYmZ1Z3E2bjgifQ.QQfUvVaqPsWb_jJbP2gvHg'
}).addTo(map)


// Add some markers 
let veranzoNarrowsBridge = [40.6066, -74.0447]
let veranzMarker = L.marker(veranzoNarrowsBridge)
    .bindPopup("Veranzo Narrows Bridge<br>Spans 1298.4 meters")
    .addTo(map)

let goldenGateBridge = [37.8199, -122.4783]
let goldenMarker = L.marker(goldenGateBridge)
    .bindPopup("Golden Gate Bridge<br>Spans 1280.2 meters")
    .addTo(map)

let mackinackBridge = [45.8174, -84.7278]
let mackinackMarker = L.marker(mackinackBridge)
    .bindPopup("Mackinack Bridge <br>Spans 1158.0 meters")
    .addTo(map)

let georgeWashBridge = [40.8517, -73.9527]
let georgeWashBridgeMarker = L.marker(georgeWashBridge)
    .bindPopup("George Washington Bridge<br>Spans 1067.0 meters")
    .addTo(map)

let tacomaNarrowsBridge = [47.2690,-122.5517]
let tacomaNarrowsMarker = L.marker(tacomaNarrowsBridge)
    .bindPopup ("Tacoma Narrows Bridge<br>Spans 853.44 meters")
    .addTo(map)




