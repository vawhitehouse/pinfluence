import React from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';
import IndexGrid from '../grid/index_grid';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 0,
      width: window.innerWidth 
    }
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPins();
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

    componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  updateDimensions() {
    const width = window.innerWidth;
    this.setState({
      width,
      columns: Math.floor(width / 252),
    });
  }
  

  render() {
    const { pins, openModal } = this.props;
    const { columns } = this.state;
    const indexColumns = Array.from({ length: columns }, () => [])
    
    if (columns > 1) {
      pins.map((pin, i) => {
        let idx = i % columns;
        debugger 
        indexColumns[idx].push(<PinIndexItem pin={pin} key={pin.id} />)
        if (i < columns) {
          // do what's outside the if - populate 1 pin per column
        } else {
          // find the col with the min height and push there
          // this means I need a way to calculate the height of each column
          // right now it's just an array of pins
          // is there a way to know the height of a pin via AWS?
          // or do I need set these up as divs & use dom methods?
        }
      });
    }

    const mappedColumns = indexColumns.map((col, i) => (
        <div className={`index-col-${i}`} key={i}>
          {col}
        </div>
      )
    )

    return ( 
      <div className="index-container">
        <div className="index-columns">
          {mappedColumns}
        </div>

        <button className="create-pin-button">
          <Link to="/create-pin" >
            <i className="fas fa-plus"></i>
          </Link>
        </button>
      </div>
    );
  }
}

export default PinIndex;
