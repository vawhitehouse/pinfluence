import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>{currentUser.username}</p>
      <button onClick={logout}>Log out</button>
    </div>
  ) 
  : (
      <div>
        <button><Link to="/signup">Sign up</Link></button>
        <button><Link to="/login">Log in</Link></button>
      </div>
    );

  return (
    <header>
      <h4>Logo goes here</h4>
      <div>
        {display}
      </div>
    </header>
  );
};
