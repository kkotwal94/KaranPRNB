import * as types from '../types';

/*
 * A store for messages to display / show global messages, especially when shit gets out of hand
 * For example a 503 error, or a non authorized error, these messages should show within the component
 */

export default function message(state = {
  message: '',
  type: 'SUCCESS',
  open: 'false'
}, action = {}) {
  switch (action.type) {
    case types.LOGIN_SUCCESS_USER:
    case types.SIGNUP_SUCCESS_USER:
    case types.LOGOUT_SUCCESS_USER:
    case types.UPDATE_USER_PROFILE_SUCCESS:
      return {...state, message: action.message, type: 'SUCCESS', open: true};
    case types.LOGIN_ERROR_USER:
    case types.SIGNUP_ERROR_USER:
    case types.LOGOUT_ERROR_USER:
    case types.UPDATE_USER_PROFILE_ERROR:
      return {...state, message: action.message, type: 'ERROR', open: true};
    case types.DISMISS_MESSAGE:
      return {...state, message: '', type: 'SUCCESS', open: false};
    default:
      return state;
    }
}
