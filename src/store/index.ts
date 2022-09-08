import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

type SetAuthStatusType = {
    type: 'SET_AUTH_STATUS';
    payload: boolean;
};

type ActionType = (
    SetAuthStatusType
);

type RootStateType = {
    authStatus: boolean;
};

const initialState: RootStateType = {
    authStatus: JSON.parse(
        localStorage.getItem('authStatus')!,
    ),
};

const rootReducer = (state: RootStateType = initialState, action: ActionType) => {
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

export const actions = {
    setAuthStatus: (status: boolean): SetAuthStatusType => ({
        type: 'SET_AUTH_STATUS',
        payload: status,
    }),
};

export const selectors = {
    authStatus: (state: RootStateType) => state.authStatus,
};

export const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
);