import { SetAuthStatusType } from "./types";

export const authActions = {
    setAuthStatus: (status: boolean): SetAuthStatusType => ({
        type: 'SET_AUTH_STATUS',
        payload: status,
    }),
};