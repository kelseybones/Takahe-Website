$('.introBox').flowtype({
    minFont : 12,
    maxFont : 20
});


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -28.643387, lng: 153.612224},
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });
}

var s = skrollr.init();
