import { LogInAction, LogOutAction } from './user.actions';
import { UserActionTypes } from './user.types';

export type UserState = {
    isAuthenticated: boolean;
};

export type UserAction = LogInAction | LogOutAction;

export const initialState: UserState = {
    isAuthenticated: false,
};

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.LOG_IN:
            return { ...state, isAuthenticated: true };
        case UserActionTypes.LOG_OUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};
