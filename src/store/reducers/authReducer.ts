type LogInAction = {
    type: string;
};

type LogOutAction = {
    type: string;
};

export type AuthState = {
    isAuthenticated: boolean;
};

export type AuthAction = LogInAction | LogOutAction;

export const initialState = {
    isAuthenticated: true,
};

export default (state: AuthState = initialState, action: AuthAction) => {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, isAuthenticated: true };
        case 'LOG_OUT':
            return { ...state, isAuthenticated: false };
        default:
            return state;
    }
};
