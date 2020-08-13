import { RECEIVE_ALL_PINS, RECEIVE_PIN, REMOVE_PIN } from '../actions/pin_actions';

const PinsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_PINS:
      return Object.assign({}, state, action.pins);
    case RECEIVE_PIN:
      return Object.assign({}, state, { [action.pin.id]: action.pin });
    case REMOVE_PIN:
      let nextState = Object.assign({}, state);
      delete nextState[action.pinId];
      return nextState;
    default:
      return state;
  }
}

export default PinsReducer;