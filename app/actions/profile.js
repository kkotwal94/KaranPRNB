import { userService} from '../services';

import * as types from '../types';

function fetchUserData() {
  return {type: types.REQUEST_USER_PROFILE };
}

function fetchUserDataSuccess(data) {
  return {type: types.REQUEST_USER_PROFILE_SUCCESS, data};
}

function fetchUserDataError(error) {
  return {type: types.REQUEST_USER_PROFILE_ERROR, error};
}

function updateUserData() {
  return {type: types.UPDATE_USER_PROFILE};
}

function updateUserDataSuccess(data, message) {
  return {type: types.UPDATE_USER_PROFILE_SUCCESS, data, message};
}

function updateUserDataError(error) {
  return {type: types.UPDATE_USER_PROFILE_ERROR, message: error};
}


export function fetchProfileData() {
  console.log('Fetching...');
   return (dispatch) => {
     dispatch(fetchUserData());
     return userService().getUser()
      .then((userData) => {
        console.log(userData);
        dispatch(fetchUserDataSuccess(userData.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(fetchUserDataError(err));
      });
   };
}

export function updateProfileData(data, id) {
    return (dispatch) => {
      dispatch(updateUserData());
      return userService().updateUser(data, id)
        .then(() => {
          dispatch(updateUserDataSuccess(data, 'Profile updated!'));
        })
        .catch((err) => {
          console.log(err);
          dispatch(updateUserDataError(err));
        });
      };
}
