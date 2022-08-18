  import React from 'react'
  import { GoogleMap} from '@react-google-maps/api';
  import {useLoadScript, MarkerF, InfoWindowF} from '@react-google-maps/api'
  
  const containerStyle = {
    width: '600px',
    height: '250px'
  };
  

  
  function MapView({lat,lng}) {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyAEAEqAyfGpMcIZiOD7CmjkECTIk2XpSuI"
    });
    let center = {
      lat: lat,
      lng: lng
    };
    return isLoaded ? (

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        >
           <MarkerF position={center}/>
            {/*<InfoWindowF position={center}>
            <p>loja</p>
          </InfoWindowF>*/}
        </GoogleMap>
    ):<></>
  }
export default React.memo(MapView)