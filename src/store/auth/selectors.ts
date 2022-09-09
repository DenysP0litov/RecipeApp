import { RootStateType } from "../recipes/types";

export const authSelectors = {
    authStatus: (state: RootStateType) => state.auth.authStatus,
};