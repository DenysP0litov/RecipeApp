export type SetAuthStatusType = {
    type: 'SET_AUTH_STATUS';
    payload: boolean;
};

export type AuthActionType = (
    SetAuthStatusType
);

export type AuthStateType = {
    authStatus: boolean;
};