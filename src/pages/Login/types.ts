export const START_LOGIN = 'START_LOGIN'
export const FINISHED_LOGIN = 'FINISHED_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'

export interface LoginState {
  isChecking: boolean,
  error: string | null,
}

export interface Error {
  message: string
}

export interface LoginPayload {
  cnpj: string,
  password: string
}

/**
 * Action Types
 */

interface StartLoginAction {
  type: typeof START_LOGIN
}

interface FinishedLoginAction {
  type: typeof FINISHED_LOGIN
}

interface FailedLoginAction {
  type: typeof FAILED_LOGIN
  error: string | null
}

export type LoginActionTypes = StartLoginAction | FinishedLoginAction | FailedLoginAction