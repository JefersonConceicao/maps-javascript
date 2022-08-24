// Initialize and add the map
function initMap() {
  const input = document.getElementById('places');

  const firstLocation = {
    lat: -13.008923792, 
    lng: -38.5234683228, 
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: firstLocation,
  });

  const marker = new google.maps.Marker({
    position: firstLocation,
    animation: google.maps.Animation.TA,
  });

  marker.setMap(map);
  polygon.setMap(map);
  
  const places = new google.maps.places.Autocomplete(input)
  places.bindTo("bounds", map);

  places.addListener('place_changed', () => {
      const place = places.getPlace();
      
      if(!place.geometry.location){
          alert("Não foi encontrado");
          return;
      }

      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      } 

      map.setCenter(location);
      map.setZoom(20);
      marker.setPosition(location);
  })
}

window.initMap = initMap;