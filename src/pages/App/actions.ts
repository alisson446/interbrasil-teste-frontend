import {
  ADD_NOTIFICATION,
  CONFIG_NOTIFICATION_SYSTEM,
  AppActionTypes
} from './types'

export function addNotification(message: string, level: string, position: string = ''): AppActionTypes {
  if (!position) position = 'bc';

  return {
    type: ADD_NOTIFICATION,
    payload: {
      message,
      level,
      position
    }
  }
}

export function configNotificationSystem(ref: any): AppActionTypes {
  return {
    type: CONFIG_NOTIFICATION_SYSTEM,
    payload: { ref }
  }
}
