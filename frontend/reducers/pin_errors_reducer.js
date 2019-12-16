import { RECEIVE_PIN_ERRORS, RECEIVE_PIN } from '../actions/pin_actions';

const pinErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_PIN_ERRORS:
      return action.errors;
    case RECEIVE_PIN:
      return [];
    default:
      return state;
  }
};

export default pinErrorsReducer;