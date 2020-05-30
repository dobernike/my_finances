import { UserActionTypes } from './user.types';
import { ActionType } from '../types';

export type LogInAction = ActionType;

export const logIn = (): LogInAction => ({
    type: UserActionTypes.LOG_IN,
});

export type LogOutAction = ActionType;

export const logOut = (): LogOutAction => ({
    type: UserActionTypes.LOG_OUT,
});
