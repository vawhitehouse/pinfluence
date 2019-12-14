import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  // const display = currentUser ? (
  //   <div>
  //     {/* <p>{currentUser.email}</p> */}
  //     <button onClick={logout}>Log out</button>
  //   </div>
  // ) 
  // : (
  //     <div>
  //       {/* <button><Link to="/signup">Sign up</Link></button>
  //       <button><Link to="/login">Log in</Link></button> */}
  //     </div>
  //   );

  return (
    <header className="nav-bar-container">
      <img id="nav-bar-logo" src={window.logoURL} height="30px" width="30px" alt="Pinfluence Logo"/>
      <div>
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search for Tiny House Design"/>
        <button onClick={logout}>Log out</button>
      </div>
    </header>
  );
};
