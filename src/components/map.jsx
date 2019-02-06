import React from 'react';

const GMap = (props) => {
  const center = {props.selectedFlat.lat, props.selectedFlat.lng}
  render(
    <div className="map-container">
      <GoogleMapReact defaultCenter={center()} defaultZoom={12}>
        <Marker lat={props.selectedFlat.lat} lng={props.selectedFlat.lng} />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
