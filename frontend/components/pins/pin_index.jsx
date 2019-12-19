import React from 'react';
import PinIndexItem from './pin_index_item';
import { Link } from 'react-router-dom';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);

    this.loadedImageCount = 0;
    this.totalNumImages = this.props.pins.length;
    this.incrementImageCount = this.incrementImageCount.bind(this);
    this.resizeAllGridItems = this.resizeAllGridItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  componentDidUpdate() {
    if (this.loadedImageCount === this.totalNumImages) {
      window.onload = this.resizeAllGridItems();
      window.addEventListener("resize", this.resizeAllGridItems);
    }
  }

  incrementImageCount() {
    this.loadedImageCount += 1;
  }

  resizeGridItem(gridItem) {
    const grid = document.getElementsByClassName("grid")[0];

    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-auto-rows"));
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue("grid-row-gap"));
    const rowSpan = Math.ceil((gridItem.querySelector('.grid-item-content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));

    gridItem.style.gridRowEnd = "span " + rowSpan;
  }

  resizeAllGridItems() {
    const allItems = document.getElementsByClassName("grid-item");
    for (let i = 0; i < allItems.length; i++) {
      this.resizeGridItem(allItems[i]);
    }
  }


  render() {
    
    const { pins, openModal } = this.props;
    const allPins = pins.map(pin => (
      <PinIndexItem pin={pin} key={pin.id} openModal={openModal} incrementImageCount={this.incrementImageCount} />
    ))

    return ( 
      
      <div className="pin-index-container">

        <div className="grid">
          {allPins}
        </div>

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
