import { AuthStateType } from './types';

export const authSelectors = {
    authStatus: (state: AuthStateType) => state.authStatus,
};