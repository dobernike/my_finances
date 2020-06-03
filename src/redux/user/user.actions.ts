import { UserActionTypes } from './user.types';

export const logIn = () => ({
    type: UserActionTypes.LOG_IN,
});

export const logOut = () => ({
    type: UserActionTypes.LOG_OUT,
});
