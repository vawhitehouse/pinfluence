import React from "react";
import { Route, Switch } from 'react-router-dom';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import NavBarContainer from './nav_bar/nav_bar_container';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';
import CreatePinFormContainer from "./pins/create_pin_form_container";
import PinIndexContainer from "./pins/pin_index_container";
import Modal from './modal/modal';
import PinShowContainer from "./pins/pin_show_container";
import EditPinFormContainer from "./pins/edit_pin_form_container";

const App = () => (
  <div>
    <header>
      <ProtectedRoute path="/" component={NavBarContainer} />
    </header>
    <main>

      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />

      <ProtectedRoute exact path="/create-pin" component={CreatePinFormContainer} />
      <ProtectedRoute exact path="/" component={PinIndexContainer} />
      <ProtectedRoute exact path="/pins/:pinId" component={PinShowContainer} />
      <ProtectedRoute exact path="/pins/:pinId/edit" component={EditPinFormContainer} />
      

      <Modal />
    </main>
  </div>
);

export default App;