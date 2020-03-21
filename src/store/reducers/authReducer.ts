import { getLocalStorage } from '../../services/localStorage/getLocalStorage';

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
    isAuthenticated: !!getLocalStorage('userData'),
};

export const authReducer = (state = initialState, action: AuthAction) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, isAuthenticated: true };
        case 'LOG_OUT':
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};
