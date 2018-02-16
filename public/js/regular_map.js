var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: new google.maps.LatLng(2.8,-187.3),
    mapTypeId: 'terrain'
  });

  // Create a <script> tag and set the USGS URL as the source.
  var script = document.createElement('script');
  script.src = 'https://developers.google.com/maps/documentation/javascript/examples/json/earthquake_GeoJSONP.js';
  document.getElementsByTagName('head')[0].appendChild(script);
}

// Loop through the results array and place a marker for each
// set of coordinates.
window.eqfeed_callback = function(results) {
  // request all data
  $.get('https://stormy-shore-87607.herokuapp.com/api/pets', function(data) {
    data = JSON.parse(data);
    for (var i = 0; i < data.length; i++) {
      var latLng = new google.maps.LatLng(data[i]['lat'],data[i]['long']);
      var marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
    }
  });
}