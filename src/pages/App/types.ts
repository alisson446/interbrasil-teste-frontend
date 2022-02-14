export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
export const CONFIG_NOTIFICATION_SYSTEM = 'CONFIG_NOTIFICATION_SYSTEM'

export interface AppState {
  _notificationSystem: any
}

/**
 * Action Types
 */

interface AddNotificationAction {
  type: typeof ADD_NOTIFICATION,
  payload: {
    message: string,
    level: string,
    position: string|null
  }
}

interface ConfigNotificationSystemAction {
  type: typeof CONFIG_NOTIFICATION_SYSTEM,
  payload: {
    ref: any
  }
}

export type AppActionTypes = AddNotificationAction | ConfigNotificationSystemAction
