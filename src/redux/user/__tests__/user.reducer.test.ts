import { userReducer, UserState, UserAction } from '../user.reducer';
import { UserActionTypes } from '../user.types';

describe('user reducer', () => {
    it('should return the initial state', () => {
        const INITIAL_STATE: UserState = { isAuthenticated: false };
        const action: UserAction = { type: 'undefined' };

        expect(userReducer(INITIAL_STATE, action)).toEqual(INITIAL_STATE);
    });

    it('should handle LOG_IN', () => {
        const INITIAL_STATE: UserState = { isAuthenticated: false };
        const action: UserAction = { type: UserActionTypes.LOG_IN };
        const state: UserState = { isAuthenticated: true };

        expect(userReducer(INITIAL_STATE, action)).toEqual(state);
    });

    it('should handle LOG_OUT', () => {
        const INITIAL_STATE: UserState = { isAuthenticated: true };
        const action: UserAction = { type: UserActionTypes.LOG_OUT };
        const state: UserState = { isAuthenticated: false };

        expect(userReducer(INITIAL_STATE, action)).toEqual(state);
    });
});
