import { AuthStateType, AuthActionType } from "./types";

const initialState: AuthStateType = {
    authStatus: JSON.parse(
        localStorage.getItem('authStatus')!,
    ) || false,
};

export const authReducer = (state: AuthStateType = initialState, action: AuthActionType) => {
    switch(action.type) {
        case ('SET_AUTH_STATUS'):
            return {
                ...state,
                authStatus: action.payload,
            }
        default:
            return state;
    }
}