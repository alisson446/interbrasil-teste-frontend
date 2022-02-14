import Cookies from 'js-cookie';
import {
    Error,
    START_LOGOUT_USER,
    FAILED_LOGOUT_USER,
    FINISEHD_LOGOUT_USER,
    SideMenuRightActionTypes
} from './types'

/**
 * Logout
 */

export function startLogoutUserAction(): SideMenuRightActionTypes {
  return {
      type: START_LOGOUT_USER
    }
}

export function finishedlogoutUsersAction(): SideMenuRightActionTypes {
    return {
      type: FINISEHD_LOGOUT_USER
    }
}

export function failedLogoutUser(error: Error): SideMenuRightActionTypes {
  return {
    type: FAILED_LOGOUT_USER,
    error: error.message
  }
}

  export function logoutUser() : CallableFunction {
    return function (dispatch: Function) : Promise<null> {
      dispatch(startLogoutUserAction());

      return Promise.resolve(Cookies.remove('token'))
      .then((res) => {
        return dispatch(finishedlogoutUsersAction())
      })
      .catch((error) => {
        dispatch(failedLogoutUser(error));
        return Promise.reject();
      })
    }
  }