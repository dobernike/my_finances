import { UserActionTypes } from './user.types';

export const logIn = () => {
    return { type: UserActionTypes.LOG_IN };
};

export const logOut = () => {
    return { type: UserActionTypes.LOG_OUT };
};
