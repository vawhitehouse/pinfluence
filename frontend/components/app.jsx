import React from "react";
import { Route } from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import CreatePinFormContainer from "./pins/create_pin_form_container";
import PinIndexContainer from "./pins/pin_index_container";

const App = () => (
  <div>
    <header>
      {/* <h1>Pinfluence - app.jsx</h1> */}
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <ProtectedRoute path="/" component={NavBarContainer} />
      <ProtectedRoute path="/" component={PinIndexContainer} />
      <ProtectedRoute path="/create-pin" component={CreatePinFormContainer} />

    </header>
  </div>
);

export default App;