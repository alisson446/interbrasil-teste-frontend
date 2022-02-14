import {
    START_LOGOUT_USER,
    FAILED_LOGOUT_USER,
    SideMenuRightState,
    SideMenuRightActionTypes
} from './types'

const initialState: SideMenuRightState = {
    error: null
}

export default function reducer(state = initialState, action: SideMenuRightActionTypes): SideMenuRightState
{
    switch (action.type) {
        case START_LOGOUT_USER:
            return {
                ...state
            };

        case FAILED_LOGOUT_USER:
            return {
                ...state,
                error: action.error
            };

        default:
            return state
    }
}
