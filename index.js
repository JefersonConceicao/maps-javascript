// Initialize and add the map
function initMap() {
  const input = document.getElementById('places');
  const uluru = { lat: -25.344, lng: 120.031 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: uluru,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    animation: google.maps.Animation.DROP,
  });

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