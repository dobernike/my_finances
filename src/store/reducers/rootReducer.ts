import { combineReducers, createStore } from 'redux';
import { authReducer, AuthState } from './authReducer';
import { deptsReducer, DeptsState } from './deptsReducer';

export type RootState = {
    auth: AuthState;
    depts: DeptsState;
};

const rootReducer = combineReducers({
    auth: authReducer,
    depts: deptsReducer,
});

export const initialState = createStore(rootReducer).getState();

export default rootReducer;
