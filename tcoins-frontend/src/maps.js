import React, { useEffect, useRef } from 'react';

function MapView({ latitude, longitude }) {
    const mapRef = useRef();
    useEffect(() => {
        new window.google.maps.Map(mapRef.current, {
            position: { lat: latitude, lng: longitude },
            zoom: 8,
        });
    }, []);
    return <div ref={mapRef} style={{ width: 1000, height: 1000 }}></div>;
}

export default MapView;