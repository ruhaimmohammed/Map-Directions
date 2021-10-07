// input tag size chang eon scroll 
let x = window.innerWidth;
if (x <= 900) {
    document.getElementById("form").className = "form-horizontal";
    document.getElementById("input-1").className = "form-group d-flex flex-row";
    document.getElementById("input-2").className = "form-group d-flex flex-row";
    document.getElementById("btn-container").className = "col-xs-offset-2 col-xs-10 my-3"; 

} else {
    document.getElementById("form").className = "form-horizontal row";
    document.getElementById("input-1").className = "form-group d-flex flex-row col my-1";
    document.getElementById("input-2").className = "form-group d-flex flex-row col my-1";
    document.getElementById("btn-container").className = "col-xs-offset-2 col-xs-10"; 

}



// create the Map 
let map = new L.map('map', {
    layers: MQ.mapLayer(),
    center: [11.2588, 75.7804],
    zoom: 12
});

// Routing
function runDirections(start, end) {
    var dir = MQ.routing.directions();

    dir.route({
        locations: [
            start,
            end
        ]
    });

    CustomRouteLayer = MQ.Routing.RouteLayer.extend({
        createStartMarker: (location) => {
            var custom_icon;
            var marker;

            custom_icon = L.icon({
                iconUrl: 'image/red.png',
                iconSize: [20, 29],
                iconAnchor: [10, 29],
                popupAnchor: [0, -29]
            });

            marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

            return marker;

        },
        createEndMarker: (location) => {
            var custom_icon;
            var marker;

            custom_icon = L.icon({
                iconUrl: 'image/blue.png',
                iconSize: [20, 29],
                iconAnchor: [10, 29],
                popupAnchor: [0, -29]
            });

            marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

            return marker;

        }
    });

    map.addLayer(new CustomRouteLayer({
        directions: dir,
        fitBounds: true
    }));


}


// function runs on form submit 
function submit(event) {
    event.preventDefault();

    start = document.getElementById("from").value;
    end = document.getElementById("to").value;

    runDirections(start, end);

    document.getElementById("form").reset();

}

// assign the form to a form variable 
const form = document.getElementById("form");

form.addEventListener('submit', submit);