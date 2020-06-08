import { selectIsAuthenticated } from '../user.selectors';
import { UserState } from '../user.reducer';

describe('user selectors', () => {
    const userState: UserState = {
        isAuthenticated: false,
    };

    describe('selectIsAuthenticated', () => {
        it('should return user.isAuthenticated as boolean', () => {
            const selected = selectIsAuthenticated.resultFunc(userState);

            expect(typeof selected).toEqual('boolean');
        });
    });
});
