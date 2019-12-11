import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>{currentUser.email}</p>
      <button onClick={logout}>Log out</button>
    </div>
  ) 
  : (
      <div>
        {/* <button><Link to="/signup">Sign up</Link></button>
        <button><Link to="/login">Log in</Link></button> */}
      </div>
    );

  return (
    <header>
      <img src={window.logoURL} height="35px" width="35px" alt="Pinfluence Logo"/>
      {/* <img src="assets/pinfluence-logo-purple.png" height="35px" width="35px" alt="Pinfluence Logo"/> */}
      <div>
        {display}
      </div>
    </header>
  );
};
