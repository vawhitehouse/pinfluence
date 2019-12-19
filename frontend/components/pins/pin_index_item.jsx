import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = props => {

  
  
  return (
  <div className="pii-container grid-item">
    <div className="pin-index-item grid-item-content" key={props.pin.id}>
      <Link to={`/pins/${props.pin.id}`}>
        <img src={props.pin.imageUrl} alt={props.pin.title} className="pii-image" onLoad={props.incrementImageCount}/>
          {/* ^^^onClick={props.openModal} */}
        <h4>{props.pin.title}</h4>
      </Link>
    </div>
  </div>
)};

export default PinIndexItem;
