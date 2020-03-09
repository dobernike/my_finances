import { combineReducers, createStore } from 'redux';
import auth, { AuthState } from './authReducer';

export type RootState = {
    auth: AuthState;
};

const rootReducer = combineReducers({
    auth,
});

export const initialState = createStore(rootReducer).getState();

export default rootReducer;
