import {
  AppState,
  ADD_NOTIFICATION,
  CONFIG_NOTIFICATION_SYSTEM,
  AppActionTypes
} from './types'

const initialState: AppState = {
  _notificationSystem: null,
}

export default function reducer(state = initialState, action: AppActionTypes): AppState {
  switch(action.type) {
    case ADD_NOTIFICATION:
      state._notificationSystem.addNotification(action.payload);
      return state;

    case CONFIG_NOTIFICATION_SYSTEM:
      return { ...state, _notificationSystem: action.payload.ref };

    default:
      return state;
  }
}
