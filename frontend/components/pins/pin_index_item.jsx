import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = props => (
  <div className="pin-index-item-container">
    <li className="pin-index-item">
      {/* image here */}
      <h4>{props.pin.title}</h4>
      {/* <Link to={`/pins/${props.pin.id}/edit`}>Edit</Link> */}
      {/* <button onClick={() => props.deletePin(props.pin.id)}>Delete</button> */}
    </li>
  </div>
);

export default PinIndexItem;
