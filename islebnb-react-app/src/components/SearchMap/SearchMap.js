import React from 'react'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'



const SearchMap = ({ locations }) => {

    const mapStyles = {
        height: "42rem",
        width: "100%",
      };
      console.log(process.env)

    return(
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API_KEY}>
            <GoogleMap
            mapContainerStyle={mapStyles}
                zoom={13}
                center={locations[0]?.location}
            >
                {/* {locations?.map((item) => {
                    return <Marker key={item.name} position={item.location} />
                })} */}
                <Marker key='wadda hell' position='{ lat: 37.550409, lng: -122.059313 }' />
            </GoogleMap>
        </LoadScript>
    )
}


export default SearchMap