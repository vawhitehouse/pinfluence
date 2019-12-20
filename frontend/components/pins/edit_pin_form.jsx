import React from 'react';
import { Redirect } from 'react-router-dom';

class EditPinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: {title: ''},
      redirectToShow: false,
      redirectToIndex: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.redirectToShow = this.redirectToShow.bind(this);
  }

  componentDidMount() {
    this.props.fetchPin(this.props.match.params.pinId)
    this.updateState;
  }

  update(field) {
    return e => this.setState({ pin: { [field]: e.currentTarget.value } })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updatePin(this.state.pin)
      .then(this.setState({ redirectToShow: true }));
  }

  handleDelete(e) {
    this.props.deletePin(this.props.pin.id)
      .then(this.setState({ redirectToIndex: true }));
  }

  redirectToShow(e) {
    e.preventDefault();
    this.setState({ redirectToShow: true });
  }

  updateState() {
    this.setState({ pin: this.props.pin})
  }

  render() {
    if (!this.props.pin) return null;

    if (this.state.pin.title === '') {
      this.setState({ pin: this.props.pin })
    }

    if (this.state.redirectToShow) {
      return (
        <Redirect to={`/pins/${this.props.pin.id}`} />
      )
    }

    if (this.state.redirectToIndex) {
      return (
        <Redirect to='/' />
      )
    }

    return (
      <div className="edit-pin-container">
        <div className="edit-pin-form-box-container">
          <div className="edit-pin-form-box">

            <div className="edit-pin-header">
              <h3>Edit this Pin</h3>
            </div>

            <form onSubmit={this.handleSubmit} className="edit-pin-form">
              <div className="edit-form-mid-grid">
                <div className="edit-pin-image-container">
                  <img src={this.props.pin.imageUrl} alt={this.state.pin.title} className="edit-pin-image" />
                </div>
                <div className="edit-pin-inputs-container">
                  <div className="edit-pin-title-container">
                    <input type="text" className="edit-pin-title-input" value={this.state.pin.title} placeholder="Title" onChange={this.update('title')}/>
                  </div>
                  <div className="edit-pin-description-container">
                    <textarea className="edit-pin-description-input" value={this.state.pin.description} placeholder="Description" onChange={this.update('description')}/>
                  </div>
                  </div>
              </div>
              <div className="edit-pin-grid-bottom">
                <div className="edit-pin-delete" onClick={this.handleDelete}>Delete</div>
                <div className="edit-pin-cancel-save">
                  <div className="edit-pin-cancel" onClick={this.redirectToShow}>Cancel</div>
                  <input type="submit" value="Save" className="edit-pin-update-button" />
                </div>
                
              </div>
            </form>

            
          </div>
        </div>
      </div>

    )
  }
}

export default EditPinForm;
