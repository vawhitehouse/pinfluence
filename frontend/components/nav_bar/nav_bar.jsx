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


      <Link to="/">
        <div className="nav-bar-logo-container">
          <img id="nav-bar-logo" src={window.logoURL} height="30px" width="30px" alt="Pinfluence Logo" />
        </div>
      </Link>

      


      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input className="search-input" type="text" placeholder="Search for Tiny House Design"/>
      </div>


      <Link to="/"><div className="nav-bar-link">Home</div></Link>
      <div className="nav-bar-link">Following</div>
      <div className="nav-bar-link">{currentUser.email}</div>

      <div className="vertical-line"></div>

      <div className="inbox-container"><i className="fas fa-comment-dots inbox"></i></div>
      <div className="notifications-container"><i className="fas fa-bell notifications"></i></div>

      <button className="nav-bar-logout-button" onClick={logout}>Log out</button>
    </header>
  );
};
