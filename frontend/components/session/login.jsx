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
      <div>
        <button><Link to='/signup'>Sign up</Link></button>

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <br />
          <input type="username" placeholder="Username" onChange={this.update('username')} />
          <br />
          <input type="password" placeholder="Password" onChange={this.update('password')} />
          <br />
          <input type="submit" value="Continue" />
          <br />
          <p><Link to='/signup'>Not on Pinterest yet? Sign up</Link></p>
        </form>

      </div>
    )
  }
}

export default Login;