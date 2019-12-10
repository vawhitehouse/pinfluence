import React from "react";
import { Route } from 'react-router-dom';
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

const App = () => (
  <div>
    <header>
      <h1>Pinfluence - app.jsx</h1>
      <Route path="/" component={NavBarContainer} />
      <AuthRoute exact path='/signup' component={SignupContainer} />
      <AuthRoute exact path='/login' component={LoginContainer} />

    </header>
  </div>
);

export default App;