import * as types from '../types';

/*
 * A store for messages to display / show global messages, especially when shit gets out of hand
 * For example a 503 error, or a non authorized error, these messages should show within the component
 */

export default function message(state = {
  message: '',
  type: 'SUCCESS',
}, action = {}) {
  switch (action.type) {
    case types.LOGIN_SUCCESS_USER:
    case types.SIGNUP_SUCCESS_USER:
      return {...state, message: action.message, type: 'SUCCESS'};
    case types.DISMISS_MESSAGE:
      return {...state, message: '', type: 'SUCCESS'};
    default:
      return state;
    }
}
