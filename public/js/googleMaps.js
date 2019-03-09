var userLat;
var userLng;
var map;
var service;
var infowindow;

var geocoded = "https://maps.googleapis.com/maps/api/geocode/json?address=23228&key=AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc"

$.getJSON(geocoded, function(result){
    userLat = result.results[0].geometry.location.lat
    userLng = result.results[0].geometry.location.lng
})

function initMap() {

var place = new google.maps.LatLng(userLat,userLng);

infowindow = new google.maps.InfoWindow();

map = new google.maps.Map(
    document.getElementById('map'), {center: place, zoom: 12});

var request = {
    query: "jiu jitsu gym",
    location: place,
    radius: "5000",
};

service = new google.maps.places.PlacesService(map);

service.textSearch(request, function(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
        createMarker(results[i]);
    }

    map.setCenter(results[0].geometry.location);
    }
});
}

function createMarker(place) {
var image = {
    url: "assets/kimono.png",
    scaledSize: new google.maps.Size(40, 43),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
    };
var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: image
});

google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name + "<br>" + place.formatted_address);
    console.log(place)
    infowindow.open(map, this);
    });
}