import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

const GMap = (props) => {
  const center = [
    props.selectedFlat.lat,
    props.selectedFlat.lng
  ];
  return (
    <div className="map-container">
      <GoogleMapReact defaultCenter={center} defaultZoom={12}>
        <Marker lat={props.selectedFlat.lat} lng={props.selectedFlat.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default GMap;
