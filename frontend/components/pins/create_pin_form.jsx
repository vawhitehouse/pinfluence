import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board_id: 1, // remove after creating boards
      title: '',
      description: '',
      link: '',
      imageFile: null,
      imageUrl: null,
      errors: this.props.errors,
      redirectToShow: false,
      redirectId: null
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    // remove after creating boards
    formData.append('pin[board_id]', this.state.board_id);
    // 
    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[link]', this.state.link);
    formData.append('pin[errors]', this.state.errors);
    if (this.state.imageFile) {
      formData.append('pin[image]', this.state.imageFile);
    }
    this.props.createPin(formData)
      .then(
        response => { 
           
          this.setState({ redirectToShow: true, redirectId: response.pin.id }), 
          (err) => {
            this.setState({ errors: this.renderErrors() })
          }
        } 
      );
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result })
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  renderErrors() {
    // let blankTitleError = [];

    const allErrors = this.props.errors.map((error, i) => (
      <li key={i}>{error}</li>
    ));

    return (
      <ul>{allErrors}</ul>
    )
  }

  render() {
    const imagePreview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;

    if (this.state.redirectToShow) {
       
      return (
        <Redirect to={`/pins/${this.state.redirectId}`}/>
      )
    }

    const displayNone = imagePreview ? 'display-none' : '';
    const display = !imagePreview ? 'display-none' : '';

    return (
      <div className="create-pin-container">
        <div className="create-pin-form-box-container">

          <div className="create-pin-form-box">
            <form onSubmit={this.handleSubmit} className="create-pin-form">

              {/* <div className="grid-1-1">grid-1-1</div> */}

              <div className="grid-1-2">
                <div className="create-pin-select-button">Select</div>
                <input className="create-pin-save-button" type="submit" value="Save" />
              </div>

              <div className="grid-2-1">

                <div className="image-preview-container">
                  <input type="file" className="create-pin-image-input" id={display} onChange={this.handleFile} />
                  {imagePreview}
                </div>

                <input type="file" className="create-pin-image-input" onChange={this.handleFile} />

                <div className="create-pin-image-container" id={displayNone}>
                  <i className="fas fa-arrow-up"></i>
                  <p>Drag and drop or click to upload</p>
                </div>

              </div>

              <div className="grid-2-2">
                <div className="create-pin-title-container">
                  <textarea className="create-pin-title-textarea" rows="1"
                    placeholder="Add your title" 
                    value={this.state.title} 
                    onChange={this.update('title')}/>
                </div>
             
                <div className="create-pin-description-container">
                  <textarea className="create-pin-description-textarea" rows="1" 
                    placeholder="Tell everyone what your Pin is about"
                    value={this.state.description}
                    onChange={this.update('description')}
                  />
                </div>
              </div>

              <div className="grid-3-1">
                {/* <div className="create-pin-save-site-button" id={displayNone}>Save from site</div> */}
              </div>
              
              <div className="grid-3-2">
                <div className="create-pin-link-container">
                  <textarea className="create-pin-link-textarea" rows="1" 
                    placeholder="Add a destination link"
                    value={this.state.link}
                    onChange={this.update('link')}
                  />
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }


}

export default CreatePinForm;