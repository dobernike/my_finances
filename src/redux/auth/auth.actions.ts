import { AuthActionTypes } from './auth.types';

export const logIn = () => {
    return { type: AuthActionTypes.LOG_IN };
};

export const logOut = () => {
    return { type: AuthActionTypes.LOG_OUT };
};
