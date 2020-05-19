import { AuthActionTypes } from './auth.types';

export type AuthState = {
    isAuthenticated: boolean;
};

type LogInAction = {
    type: string;
};

type LogOutAction = {
    type: string;
};

export type AuthAction = LogInAction | LogOutAction;

export const initialState: AuthState = {
    isAuthenticated: false,
};

export const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.LOG_IN:
            return { ...state, isAuthenticated: true };
        case AuthActionTypes.LOG_OUT:
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};
