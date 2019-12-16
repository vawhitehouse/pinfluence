import React from 'react';
import { Link } from 'react-router-dom';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desription: '',
      link: '',
      imageFile: null,
      imageUrl: null,
      errors: this.props.errors
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('pin[title]', this.state.title);
    formData.append('pin[description]', this.state.description);
    formData.append('pin[link]', this.state.link);
    formData.append('pin[errors]', this.state.errors);
    if (this.state.imageFile) {
      formData.append('pin[image]', this.state.imageFile);
    }
      // ajax(pin_api_util.js) also needs:
        // contentType: false,
        // processData: false

    this.props.createPin(formData)
      .then(null, (err) => {
        this.setState({ errors: this.renderErrors() })
      });
  }

  handleFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result })
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  renderErrors() {
    let blankTitleError = [];

    const allErrors = this.props.errors.map((error, i) => (
      <li key={i}>{error}</li>
    ));

    return (
      <ul>{allErrors}</ul>
    )
  }

  render() {
    const imagePreview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    return (
      <div className="create-pin-container">
        <div className="top-row">
          <div className="top-row-buttons">
            {/* <button>Board</button>
            <button>Save</button> */}
          </div>
        </div>

        <div className="create-pin-form-container">
          <form onSubmit={this.handleSubmit}>

            <input type="text" placeholder="Add your title"/>

            <input type="file" onChange={this.handleFile}/>
            {imagePreview}
            
            <input type="submit" value="Save"/>
            
          </form>
        </div>

      </div>
    )
  }


}

export default CreatePinForm;