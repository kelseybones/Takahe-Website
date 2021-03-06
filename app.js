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

$('.introBox').flowtype({
    minFont : 12,
    maxFont : 20
});

$('.box, .quote').flowtype({
    minFont : 10,
    maxFont : 16
});

$('.section-1 .parallaxBg .scene').parallax();

$('nav .links li').click(function() {
    var clickedLink = $(this);
    highlightNavLink(clickedLink);
});

$('#home').waypoint({
    handler: function(direction) {
        highlightNavLink($('nav .links li:nth-child(1)'));
    },
    offset: -100
})

$('#intro').waypoint({
    handler: function(direction) {
        highlightNavLink($('nav .links li:nth-child(2)'));
    },
    offset: 280
})

$('#bird').waypoint({
    handler: function(direction) {
        highlightNavLink($('nav .links li:nth-child(3)'));
    },
    offset: 300
})

$('#journey').waypoint({
    handler: function(direction) {
        highlightNavLink($('nav .links li:nth-child(4)'));
    },
    offset: 300
})

$('#newzeland').waypoint({
    handler: function(direction) {
        highlightNavLink($('nav .links li:nth-child(5)'));
    },
    offset: 300
})

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: -45.594822, lng: 168.145752},
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_BOTTOM
    }
  });
}

var s = skrollr.init({forceHeight: false});
smoothScroll.init();

highlightNavLink($('nav .links li:nth-child(1)'));