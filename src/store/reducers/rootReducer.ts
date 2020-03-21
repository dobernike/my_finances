import { combineReducers, createStore } from 'redux';
import { authReducer, AuthState } from './authReducer';
import { deptsReducer, DeptsState } from './deptsReducer';
import { appReducer, AppState } from './appReducer';

export type RootState = {
    auth: AuthState;
    depts: DeptsState;
    app: AppState;
};

const rootReducer = combineReducers({
    auth: authReducer,
    depts: deptsReducer,
    app: appReducer,
});

export const initialState = createStore(rootReducer).getState();

export default rootReducer;
