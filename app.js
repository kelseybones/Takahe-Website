$('.introBox').flowtype({
    minFont : 12,
    maxFont : 20
});

$('.box, .quote').flowtype({
    minFont : 10,
    maxFont : 16
});

function highlightNavLink(linkToHighlight) {
    var linksContainer = $('nav .links');
    var linksContainerLeftPosition = linksContainer.position().left;
    
    var linkTextWidth = linkToHighlight.width()
    var linkPosition = linkToHighlight.position().left;
        
    var hr = $('nav .links hr');
    hr.css({ 
        width: linkTextWidth + "px",
        marginLeft : (linkPosition - linksContainerLeftPosition) + 18 + "px"
    });
}

$('nav .links li').click(function() {
    var clickedLink = $(this);
    highlightNavLink(clickedLink);
});

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: {lat: -28.643387, lng: 153.612224},
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });
}

var s = skrollr.init({forceHeight: false});
highlightNavLink($('nav .links li:nth-child(1)'));