var express = require("express");

const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDZYOxZZL8kgIlC4RLfG8Gkfr8xHnZmFTc'
  });

  // Geocode an address.
  googleMapsClient.geocode({
    address: '23228'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });