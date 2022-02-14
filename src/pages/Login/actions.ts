import Cookies from 'js-cookie';
import axios from 'axios';
import { post } from '../../external/api/request'
import apiPaths from '../../external/api/paths';
import {
  Error,
  LoginPayload,
  START_LOGIN,
  FINISHED_LOGIN,
  FAILED_LOGIN,
  LoginActionTypes
} from './types';

/**
 * Login
 */

export function startLogin() : LoginActionTypes {
  return { type: START_LOGIN }
}

export function finishedLogin() : LoginActionTypes {
  return { type: FINISHED_LOGIN }
}

export function failedLogin(error: Error) : LoginActionTypes {
  return {
    type: FAILED_LOGIN,
    error: error.message
  }
}

export function apiLogin(payload: LoginPayload) : CallableFunction {
  return function (dispatch: Function) : Promise<null> {
    dispatch(startLogin());
    const { cnpj, password } = payload;

    return axios(post(apiPaths.login, { cnpj, password }))
      .then((apiToken) =>
      {
        Cookies.set('userID', apiToken.data.userID, {
          expires: parseInt(process.env.REACT_APP_SESSION_TIME || '1') // 1 day
        })
        Cookies.set('token', apiToken.data.token, {
          expires: parseInt(process.env.REACT_APP_SESSION_TIME || '1') // 1 day
        });

        return dispatch(finishedLogin());
      })
      .catch((error) => {
        dispatch(failedLogin(error));
        return Promise.reject();
      });
  }
}
