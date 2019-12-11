import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state);
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
        <button><Link to='/signup'>Sign up</Link></button>

        <div className="session-box">
          <img src="assets/pinfluence-logo-purple.png" height="45px" width="45px" alt="Pinfluence Logo" />

          <h3>Welcome to Pinfluence</h3>

          {this.renderErrors()}

          <form onSubmit={this.handleSubmit} className="session-form">
            <input className="session-form-input" type="email" placeholder="Email" onChange={this.update('email')} />
            <input className="session-form-input" type="password" placeholder="Password" onChange={this.update('password')} />
            <input className="session-form-submit" type="submit" value="Log in" />
            <p><Link to='/signup'>Not on Pinterest yet? Sign up</Link></p>
          </form>

        </div>

      </div>
    )
  }
}

export default Login;