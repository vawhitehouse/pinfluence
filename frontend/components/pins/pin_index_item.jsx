import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = props => {

  
  
  return (
  <div className="pii-container grid-item">
    <div className="pin-index-item grid-item-content" key={props.pin.id}>
      <Link to={`/pins/${props.pin.id}`}>
        <div className="pii-image-container">
          <img src={props.pin.imageUrl} alt={props.pin.title} className="pii-image" onLoad={props.incrementImageCount}/>
        </div>
          {/* ^^^onClick={props.openModal} */}
        <h4>{props.pin.title}</h4>
      </Link>
    </div>
  </div>
)};

export default PinIndexItem;
