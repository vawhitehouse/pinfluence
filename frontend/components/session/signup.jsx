import React from 'react';
import { Link } from 'react-router-dom'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: this.props.errors
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state)
      .then(null, (err) => {
        this.setState({ errors: this.renderErrors() })
      });
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value })
  }

  // renderErrors() {
  //   const allErrors = this.props.errors.map((error, i) => (
  //     <li key={i}>{error}</li>
  //   ));

  //   return (
  //     <ul>{allErrors}</ul>
  //   )
  // }

  renderErrors() {
    let blankEmailError = [];
    let invalidEmailFormatError = [];
    let emailTakenError = [];
    let passwordError = [];
    let ageError = [];

    function validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (this.props.errors.includes("Email can't be blank")) {
      blankEmailError.push("You missed a spot! Don’t forget to add your email.");
      return blankEmailError;
    } else if (this.props.errors.includes("Email has already been taken")) {
      emailTakenError.push("Please use a different email.");
      return emailTakenError;
    } else if (!validEmail(this.state.email)) {
      invalidEmailFormatError.push("Hmm...that doesn't look like an email address.");
      return invalidEmailFormatError;
    } else if (this.props.errors.includes("Password is too short (minimum is 6 characters)")) {
      passwordError.push("Your password is too short! You need 6+ characters.");
      return passwordError;
    } else if (this.props.errors.includes("Age can't be blank")) {
      ageError.push("Help us protect you by providing your age");
      return ageError;
    }

  }

  emailErrors() {
    if (this.state.errors[0] === "You missed a spot! Don’t forget to add your email." 
      || this.state.errors[0] === "Hmm...that doesn't look like an email address." 
      || this.state.errors[0] === "Please use a different email.") {
      return this.state.errors;
    }
  }

  passwordErrors() {
    if (this.state.errors[0] === "Your password is too short! You need 6+ characters.") {
      return this.state.errors;
    }
  }

  ageErrors() {
    if (this.state.errors[0] === "Help us protect you by providing your age") {
      return this.state.errors;
    }
  }


  render() {

    return (
      <div className="session-container">
        <button className="session-top-button"><Link to='/login'>Log in</Link></button>

        <div className="session-box-container">

          <div className="session-box">
            <img src={window.logoURL} height="45px" width="45px" alt="Pinfluence Logo" />
            {/* <img src="assets/pinfluence-logo-purple.png" height="45px" width="45px" alt="Pinfluence Logo" /> */}

            <h3>Welcome to Pinfluence</h3>
            <h5>Find new ideas to try</h5>

            <form onSubmit={this.handleSubmit} className="session-form">
              <input className="session-form-input" type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')}/>
              <span className="error" >{this.emailErrors()}</span>
              <input className="session-form-input" type="password" placeholder="Enter password" value={this.state.password} onChange={this.update('password')}/>
              <span className="error" >{this.passwordErrors()}</span>
              <input className="session-form-input" type="text" placeholder="Age" value={this.state.age} onChange={this.update('age')}/>
              <span className="error" >{this.ageErrors()}</span>
              <input className="session-form-submit" type="submit" value="Continue" />

              <p>By continuing, you agree to Pinfluence's <a>Terms of Service</a>, <a>Privacy Policy</a></p>
              
              <div className="horizontal-line"></div>
              <p><Link to='/login'>Already a member? Log in</Link></p>
            </form>

          </div>
          <div className="footer-links">
            <a>About Pinfluence</a>
            <a>Blog</a>
            <a>Businesses</a>
            <a>Terms of Service</a>
            <a>Privacy Policy</a>
            <a>Help</a>
            <a>iPhone App</a>
            <a>Android App</a>
            <a>Users</a>
            <a>Collections</a>
            <a>Topics</a>
          </div>
        </div>

      </div>
    )
  }
}

export default Signup;
