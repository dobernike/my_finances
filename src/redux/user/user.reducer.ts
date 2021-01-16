import * as actions from './user.actions';
import { UserActionTypes } from './user.types';
import { InferValueTypes } from '../types';

export type UserState = {
    isAuthenticated: boolean;
};

export type UserAction = ReturnType<InferValueTypes<typeof actions>>;

export const initialState: UserState = {
    isAuthenticated: false,
};

export const userReducer = (state = initialState, action: UserAction) => {
    switch (action.type) {
        case UserActionTypes.LOG_IN:
            return {
                ...state,
                isAuthenticated: true,
            };
        case UserActionTypes.LOG_OUT:
            return {
                ...state,
                isAuthenticated: false,
            };
        default:
            return state;
    }
};
