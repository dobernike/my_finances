import { combineReducers } from 'redux';

import { authReducer, AuthState } from './auth/auth.reducer';
import { deptsReducer, DeptsState } from './depts/depts.reducer';

export type RootState = {
    auth: AuthState;
    depts: DeptsState;
};

export const rootReducer = combineReducers({
    auth: authReducer,
    depts: deptsReducer,
});
