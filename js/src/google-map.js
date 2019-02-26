function initMap() {
  var location = {
    title: 'CW-Gebäudereinigung GmbH',
    street: 'Schillingsdorfer Strasse 30',
    city: '8010 Kainbach bei Graz',
    pos: { lat: 47.1112005, lng: 15.5460319}
  };
  var mapEl = document.querySelector('.map');
  console.log(mapEl);
  var options = {
    zoom: 15,
    center: location.pos,
    styles:[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]
  };
  var map = new google.maps.Map(mapEl, options);
  var marker = new google.maps.Marker({
    position: location.pos,
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content: createInfoWindowString(
      location.title,
      location.street,
      location.city
    )
  });
  marker.addListener('click', function() {
    infowindow.open(map, this);
  });
  infowindow.open(map, marker);

  function createInfoWindowString(title, street, city) {
    return '<strong>' + title + '</strong><br>' + street + '<br>' + city;
  }
}
