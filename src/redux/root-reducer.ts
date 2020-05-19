import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer, AuthState } from './auth/auth.reducer';
import { deptsReducer, DeptsState } from './depts/depts.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'depts'],
};

export type RootState = {
    auth: AuthState;
    depts: DeptsState;
};

const rootReducer = combineReducers({
    auth: authReducer,
    depts: deptsReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
