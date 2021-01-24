import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

export const receiveAllPins = (pins) => {
  // debugger
  return {
    type: RECEIVE_ALL_PINS,
    pins
  }
};

const receivePin = (pin) => ({
  type: RECEIVE_PIN,
  pin
});

const removePin = (pinId )=> ({
  type: REMOVE_PIN,
  pinId
});

const receiveErrors = errors => {
  return ({
  type: RECEIVE_PIN_ERRORS,
  errors
})};

export const fetchAllPins = () => dispatch => (
  PinApiUtil.fetchAllPins().then(pins => (
    dispatch(receiveAllPins(pins))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const fetchPin = pinId => dispatch => (
  PinApiUtil.fetchPin(pinId).then(pin => (
    dispatch(receivePin(pin))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const createPin = pin => dispatch => {
  return PinApiUtil.createPin(pin).then(pin => {
    return dispatch(receivePin(pin))
  }, err => {
    return dispatch(receiveErrors(err.responseJSON))
  }
)};

export const savePin = pin => dispatch => {
   
  return (
    PinApiUtil.savePin(pin).then(pin => (
      dispatch(receivePin(pin))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  )
};

export const updatePin = pin => dispatch => {
  return PinApiUtil.updatePin(pin).then(pin => {
      return dispatch(receivePin(pin))
  }, err => {
      return dispatch(receiveErrors(err.responseJSON))
  }
)};

export const deletePin = pinId => dispatch => (
  PinApiUtil.deletePin(pinId).then(() => (
    dispatch(removePin(pinId))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);