import React from 'react';
import { Link } from 'react-router-dom'

class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return e => this.setState( { [field]: e.currentTarget.value })
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
        <button><Link to='/login'>Log in</Link></button>

        {this.renderErrors()}

        <form onSubmit={this.handleSubmit}>
          <br/>
          <input type="email" placeholder="Email" onChange={this.update('email')}/>
          <br/>
          <input type="password" placeholder="Password" onChange={this.update('password')}/>
          <br/>
          <input type="text" placeholder="Age" onChange={this.update('age')}/>
          <br/>
          <input type="submit" value="Continue"/>
          <br/>
          <p><Link to='/login'>Already a member? Log in</Link></p>
        </form>

      </div>
    )
  }
}

export default Signup;
