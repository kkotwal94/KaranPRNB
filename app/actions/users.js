import { goBack } from 'react-router-redux';
import { authService } from '../services';

import * as types from '../types';

function beginLogin() {
  return { type: types.MANUAL_LOGIN_USER };
}

function loginSuccess(message) {
  return {
    type: types.LOGIN_SUCCESS_USER,
    message
  };
}

function setProfileData(data) {
  return {
    type: types.SET_USER_PROFILE_SUCCESS,
    data
  };
}
function loginError(message) {
  return {
    type: types.LOGIN_ERROR_USER,
    message
  };
}

function signUpError(message) {
  return {
    type: types.SIGNUP_ERROR_USER,
    message
  };
}

function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

function signUpSuccess(message) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    message
  };
}

function beginLogout() {
  return { type: types.LOGOUT_USER};
}

function logoutSuccess(message) {
  return {
    type: types.LOGOUT_SUCCESS_USER,
    message
   };
}

function logoutError(message) {
  return {
    type: types.LOGOUT_ERROR_USER,
    message
  };
}

export function toggleLoginMode() {
  return { type: types.TOGGLE_LOGIN_MODE };
}

export function manualLogin(data) {
  return (dispatch) => {
    dispatch(beginLogin());

    return authService().login(data)
      .then((response) => {
          dispatch(loginSuccess('You have been successfully logged in'));
          dispatch(setProfileData(response.data));
          dispatch(goBack);
      })
      .catch((err) => {
        dispatch(loginError('Oops! Invalid username or password'));
      });
  };
}

export function signUp(data) {
  console.log("Sign up action");
  return (dispatch) => {
    dispatch(beginSignUp());

    return authService().signUp(data)
      .then((response) => {
          dispatch(signUpSuccess('You have successfully registered an account!'));
          dispatch(setProfileData(response.data));
          dispatch(goBack);
      })
      .catch((err) => {
        dispatch(signUpError('Oops! Something went wrong when signing up'));
      });
  };
}

export function signUpMismatch(message) {
  console.log('In mismatch action');
  return (dispatch) => {
    dispatch(signUpError(message));
  };
}

export function logOut() {
  return (dispatch) => {
    dispatch(beginLogout());

    return authService().logOut()
      .then((response) => {
          dispatch(logoutSuccess('Logout Successful!'));
      })
      .catch((err) => {
        dispatch(logoutError('Logout Failed!'));
      });
  };
}
