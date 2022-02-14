import {
  LoginState,
  START_LOGIN,
  FINISHED_LOGIN,
  FAILED_LOGIN,
  LoginActionTypes
} from './types'

const initialState: LoginState = {
  isChecking: false,
  error: null
}

export default function reducer(state = initialState, action: LoginActionTypes): LoginState {
  switch (action.type) {
    case START_LOGIN:
      return { ...state, isChecking: true }

    case FINISHED_LOGIN:
      return { ...state, isChecking: false, error: null }

    case FAILED_LOGIN:
      return { ...state, isChecking: false, error: action.error }

    default:
      return state
  }
}
