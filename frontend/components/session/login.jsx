import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
  }

  demoLogin(e) {
    e.preventDefault();
    this.props.login({ email: 'demoUser@demo.com', password: 'password' })
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  renderErrors() {
    const allErrors = this.props.errors.map((error, i) => (
      <li key={i}>{error}</li>
    ));

    return (
      <ul>{allErrors}</ul>
    )
  }

  render() {

    return (
      <div className="session-container">
        <button className="session-top-button"><Link to='/signup'>Sign up</Link></button>

        <div className="session-box-container">
          <div className="session-box">
            <img src={window.logoURL} height="45px" width="45px" alt="Pinfluence Logo" />
            {/* <img src="assets/pinfluence-logo-purple.png" height="45px" width="45px" alt="Pinfluence Logo" /> */}

            <h3>Welcome to Pinfluence</h3>
            
            {this.renderErrors()}

            <form onSubmit={this.handleSubmit} className="session-form">
              <input className="session-form-input" type="email" placeholder="Email" onChange={this.update('email')} />
              <input className="session-form-input" type="password" placeholder="Password" onChange={this.update('password')} />
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

export default Login;