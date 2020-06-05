import { logIn, logOut } from '../user.actions';
import { UserActionTypes } from '../user.types';

describe('user actions', () => {
    describe('logIn', () => {
        it('should create an action to log in', () => {
            const action = { type: UserActionTypes.LOG_IN };

            expect(logIn()).toEqual(action);
        });
    });

    describe('logOut', () => {
        it('should create an action to log out', () => {
            const action = { type: UserActionTypes.LOG_OUT };

            expect(logOut()).toEqual(action);
        });
    });
});
