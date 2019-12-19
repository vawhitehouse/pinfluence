import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class PinShow extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      redirectToIndex: false
    }
    this.redirectToIndex = this.redirectToIndex.bind(this);
    this.handleSave = this.handleSave.bind(this)

    this.currentPin = {
      pin: {
        title: this.props.pin.title,
        link: this.props.pin.link,
        description: this.props.pin.description,
        copiedPinId: this.props.pin.id,
        // remove after board 
        board_id: 1

      }
    }
    
  }
  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
  }

  redirectToIndex() {
    this.setState({ redirectToIndex: true })
  }

  handleSave(e) {
    e.preventDefault();
    this.props.savePin(this.currentPin)
      .then(this.redirectToIndex())
  }

  render () {
    if (!this.props.pin) return null;
    
    

    if (this.state.redirectToIndex) {
      return (
        <Redirect to="/" />
      )
    }
    
    return (
      <div className="pin-show-container" >
        {/* onClick={this.redirectToIndex} */}
        <Link to='/'>
          <div className="pin-show-arrow-container">
            <i className="fas fa-arrow-left"></i>
          </div>
        </Link>
        <div className="pin-show-box-container">
          <div className="pin-show-box">
            <div className="pin-show-grid">
              <img src={this.props.pin.imageUrl} alt={this.props.pin.title} className="pin-show-image" />
              <div className="pin-show-left">
                <div className="pin-show-left-top">
                  <div className="pin-show-select-button">Select</div>
                  <button onClick={this.handleSave} className="pin-show-save-button">Save</button>
                </div>
                <div className="pin-show-left-middle">
                  <a className="pin-show-link">
                    {this.props.pin.link || 'Link goes here'}
                  </a>
                  <h4 className="pin-show-title">
                    {this.props.pin.title}
                  </h4>
                  <p className="pin-show-description">
                    {this.props.pin.description || 'Description goes here'}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* <Link to={`/pins/${props.pin.id}/edit`}>Edit</Link> */}
          {/* <button onClick={() => props.deletePin(props.pin.id)}>Delete</button> */}
        </div>
      </div>
    )
  }
}

export default withRouter(PinShow);