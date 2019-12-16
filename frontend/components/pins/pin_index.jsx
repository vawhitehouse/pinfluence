import React from 'react';
import PinIndexItem from './pin_index_item';

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

        <ul>
          {allPins}
        </ul>
      </div>
    )
  }

}

export default PinIndex;
