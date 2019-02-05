import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const list = () => {
    return props.flats.map((flat, index) => {
        return <Flat
          id={`flat-{props.lat}`}
          key={props.lat}
          handleUpdate={props.handleUpdate}
          name={flat.name}
          imageUrl={flat.imageUrl}
          price={flat.price}
          priceCurrency={flat.priceCurrency}
          lat={flat.lat}
          lng={flat.lng}
          onClick = {props.handleUpdate}
          />
      });
  }

  return(
    <div className="flat-list">
      {list()}
    </div>
  );
};

export default FlatList;
