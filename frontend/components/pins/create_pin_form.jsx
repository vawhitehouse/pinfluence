import React from 'react';
import { Link } from 'react-router-dom';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desription: '',
      link: '',
      errors: this.props.errors
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPin(this.state)
      .then(null, (err) => {
        this.setState({ errors: this.renderErrors() })
      });
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


            
          </form>
        </div>

      </div>
    )
  }


}

export default CreatePinForm;