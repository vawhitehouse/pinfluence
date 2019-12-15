import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = props => (
  <li>
    <Link to={`/pins/${props.pin.id}`}>{props.pin.title}</Link>
    {props.pin.title}
    <Link to={`/pins/${props.pin.id}/edit`}>Edit</Link>
    {/* <button onClick={() => props.deletePin(props.pin.id)}>D</button> */}
  </li>
);

export default PinIndexItem;
