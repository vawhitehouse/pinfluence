import React from 'react';
import { Link } from 'react-router-dom'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '', 
      password: '', 
      errors: this.props.errors};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
      .then(null, (err) => {
        this.setState({errors: this.renderErrors()})
      })

  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({ email: 'demoUser@demo.com', password: 'password' })
  }

  update(field) {
    return e => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  renderErrors() {
    let blankEmailError = [];
    let invalidEmailFormatError = [];
    let passwordError = [];

    function validEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    if (this.props.errors.includes("Invalid email/password.")){
      
      if (this.state.email === '') {
        blankEmailError.push("You missed a spot! Don’t forget to add your email.")
      } else if (!validEmail(this.state.email)) {
        invalidEmailFormatError.push("Hmm...that doesn't look like an email address.")
      } 
      else {
        passwordError.push("The password you entered is incorrect. Try again")
      }
    }
    if (blankEmailError.length) {
      return blankEmailError
    } else if (invalidEmailFormatError.length) {
      return invalidEmailFormatError
    } else if (passwordError.length) {
      return passwordError
    }
  }

  emailErrors() {
    if (this.state.errors[0] === "You missed a spot! Don’t forget to add your email." 
    || this.state.errors[0] === "Hmm...that doesn't look like an email address.") {
      return this.state.errors;
    }
  }

  passwordErrors() {
    if (this.state.errors[0] === "The password you entered is incorrect. Try again") {
      return this.state.errors;
    }
  }

  render() {
    const emailOutline = this.emailErrors() ? 'error-outline' : '';
    const passwordOutline = this.passwordErrors() ? 'error-outline' : '';

    return (
      <div className="session-container">
        <button className="session-top-button"><Link to='/signup'>Sign up</Link></button>

        <div className="session-box-container">
          <div className="session-box">
            <img src={window.logoURL} height="45px" width="45px" alt="Pinfluence Logo" />

            <h3>Welcome to Pinfluence</h3>

            <form onSubmit={this.handleSubmit} className="session-form">

              <input className={`session-form-input ${emailOutline}`} type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} />
              <span className="error">{this.emailErrors()}</span>
              
              <input className={`session-form-input ${passwordOutline}`} type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} />
              <span className="error">{this.passwordErrors()}</span>

              <input className="session-form-submit" type="submit" value="Log in" />
              <button onClick={this.demoLogin} className="demo-login-button">Demo Log in</button>

              <p>By continuing, you agree to Pinfluence's <a>Terms of Service</a>, <a>Privacy Policy</a></p>
              <div className="horizontal-line"></div>
              <p><Link to='/signup'>Not on Pinterest yet? Sign up</Link></p>

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

export default LoginForm;