import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer, UserState } from './user/user.reducer';
import { deptsReducer, DeptsState } from './depts/depts.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

export type RootState = {
    user: UserState;
    depts: DeptsState;
};

const rootReducer = combineReducers({
    user: userReducer,
    depts: deptsReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
