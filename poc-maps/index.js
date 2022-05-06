let map;
let infowindow;

async function initMap() {
    const mapOptions = {
        zoom: 15,
        center: { lat: -37.793834, lng: 144.987018 }
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    infowindow = new google.maps.InfoWindow();

    getLocation();

    const locations = [
        { name: 'Estação de Jaboatão', lat: -8.111128, lng: -35.017472 },
        { name: 'IFPE', lat: -8.1136885, lng: -35.032987 },
        { name: 'UPA Jaboatão', lat: -8.11096, lng: -35.008839 },
        { name: 'Atacadão', lat: -8.1124277, lng: -35.0343976 }
    ];
    
    locations.map((local) => placeMarker(local));
}



function placeMarker(local, isUser = false) {
    const optionsMarker = {
        position: new google.maps.LatLng(local.lat, local.lng),
        map
    }
    if(isUser) optionsMarker.icon = './icons/location-64px.png';

    const marker = new google.maps.Marker(optionsMarker);

    if(!isUser) {
        google.maps.event.addListener(marker, "click", () => {
            infowindow.close();
            infowindow.setContent(`<div id="infowindow">${local.name}</div>`);
            infowindow.open(map, marker);
        });
    }
}



async function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const currentLocation = { lat: position.coords.latitude, lng: position.coords.longitude }
            placeMarker(currentLocation, true);
            map.setCenter(currentLocation);
        }, (error) => {
            alert("Não foi possível obter sua localização.");
        });
    } else { 
        alert("Geolocalização não suportada para esse navegador.");
    }
}


window.initMap = initMap;