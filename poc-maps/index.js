let map;
let infowindow;

async function initMap() {
    const mapOptions = {
        zoom: 15,
        center: { lat: -37.793834, lng: 144.987018 }
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    infowindow = new google.maps.InfoWindow();

    const currentLocation = await getLocation();
    if(currentLocation) {
        new google.maps.Marker({
            position: new google.maps.LatLng(currentLocation.lat, currentLocation.lng),
            icon: './icons/location-64px.png',
            map
        });
    }

    const locations = [
        { name: 'Estação de Jaboatão', lat: -8.111128, lng: -35.017472 },
        { name: 'IFPE', lat: -8.1136885, lng: -35.032987 },
        { name: 'UPA Jaboatão', lat: -8.11096, lng: -35.008839 },
        { name: 'Atacadão', lat: -8.1124277, lng: -35.0343976 }
    ];
    
    locations.map(placeMarker);
}



function placeMarker(local) {
    const marker = new google.maps.Marker({
        position: new google.maps.LatLng(local.lat, local.lng),
        map
    });

    google.maps.event.addListener(marker, "click", () => {
        infowindow.close();
        infowindow.setContent(`<div id="infowindow">${local.name}</div>`);
        infowindow.open(map, marker);
    });
}



async function getLocation() {
    return new Promise((resolve, reject) => {
        let currentLocation;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                currentLocation = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
                map.setCenter(currentLocation);
                resolve(currentLocation);
            }, (error) => {
                alert("Não foi possível obter sua localização.");
                reject(false);
            });
        } else { 
            alert("Geolocalização não suportada para esse navegador.");
        }
    })
}


window.initMap = initMap;