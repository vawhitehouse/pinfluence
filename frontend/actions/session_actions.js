import * as sessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => {
  // debugger
  return (
  sessionApiUtil.signup(user).then(user => {
    // debugger
    return (
    dispatch(receiveCurrentUser(user))
  )}, err => {
    // debugger
    return (
    dispatch(receiveErrors(err.responseJSON))
  )})
)};

export const login = user => dispatch => {
  debugger
  return (
  sessionApiUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)};

export const logout = () => dispatch => (
  sessionApiUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);