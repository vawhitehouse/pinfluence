import React from "react";
import { Route } from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import create_pin_form_container from "./pins/create_pin_form_container";

const App = () => (
  <div>
    <header>
      {/* <h1>Pinfluence - app.jsx</h1> */}
      <ProtectedRoute path="/" component={NavBarContainer} />
      <ProtectedRoute path="/create-pin" component={create_pin_form_container} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />

    </header>
  </div>
);

export default App;