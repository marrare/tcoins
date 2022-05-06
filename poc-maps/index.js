let map;
let infowindow;

async function initMap() {
    const mapOptions = {
        zoom: 11,
        center: { lat: -37.793834, lng: 144.987018 }
    };
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    infowindow = new google.maps.InfoWindow();

    getLocation();

    const locations = [
        { name: 'IFPE Campus Jaboatão dos Guararapes', lat: -8.1184208, lng: -35.0335069, link: 'https://www.ifpe.edu.br/campus/jaboatao', endereco: 'Estr. de Bulhões - Bulhões, Jaboatão dos Guararapes - PE, 54080-000' },
        { name: 'IFPE Campus Cabo de Santo Agostinho', lat: -8.275302, lng: -35.0611116, link: 'https://www.ifpe.edu.br/campus/cabo', endereco: 'Sede Provisória (Fachuca - R. Sebastião Jovêntino, S/N - Destilaria, Cabo de Santo Agostinho - PE, 54510-110' },
        { name: 'IFPE Campus Recife', lat: -8.1072273, lng: -35.0541636, link: 'https://www.ifpe.edu.br/campus/recife', endereco: 'Av. Prof. Luís Freire, 500 - Cidade Universitária, Recife - PE, 50740-545' },
        { name: 'IFPE Campus Vitória de Santo Antão', lat: -8.1013378, lng: -35.2937936, link: 'https://www.ifpe.edu.br/campus/vitoria', endereco: 's/n Propriedade Terra Preta Zona Rural, Vitória de Santo Antão - PE, 55600-000' },
        { name: 'Campus Paulista', lat: -7.9456112, lng: -34.893849, link: 'https://www.ifpe.edu.br/campus/paulista', endereco: 'Maranguape I, Paulista - PE, 53441-601' },
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
            infowindow.setContent(`<div id="infowindow">
                <h3>${local.name}</h3>
                <p>${local.endereco}</p></br>
                <a href="${local.link}" target="_blank">site</a>
                </div>`);
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