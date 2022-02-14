export const START_LOGOUT_USER = 'START_LOGOUT_USER'
export const FINISEHD_LOGOUT_USER = 'FINISEHD_LOGOUT_USER'
export const FAILED_LOGOUT_USER = 'FAILED_LOGOUT_USER'

export interface Error {
  message: string
}
export interface SideMenuRightState {
    error: string|null
  }
/**
 * Action Types
 */

interface logoutUsersAction {
  type: typeof START_LOGOUT_USER
}

interface finishedlogoutUsersAction {
  type: typeof FINISEHD_LOGOUT_USER
}

interface failedLogoutUsersAction {
    type: typeof FAILED_LOGOUT_USER,
    error: string|null
  }

export type SideMenuRightActionTypes = logoutUsersAction | failedLogoutUsersAction | finishedlogoutUsersAction