import React from 'react';
import PinIndexItem from './pin_index_item';
import { Link} from 'react-router-dom'

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
    const { pins } = this.props;
    const allPins = pins.map(pin => (
      <PinIndexItem pin={pin} key={pin.id} />
    ))
    return ( 
      
      <div className="pin-index-container">

        <ul className="masonry">
          {allPins}
        </ul>

        <button className="create-pin-button">
          <Link to="/create-pin" >
            <i className="fas fa-plus"></i>
          </Link>
        </button>
      </div>
    )
  }

}

export default PinIndex;
