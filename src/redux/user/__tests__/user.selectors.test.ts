import { selectIsAuthenticated } from '../user.selectors';

describe('user selectors', () => {
    it('should return user.isAuthenticated as boolean', () => {
        const mockParameters = {
            user: {
                isAuthenticated: false,
            },
        };
        const selected = selectIsAuthenticated.resultFunc(mockParameters.user);

        expect(typeof selected).toEqual('boolean');
    });
});
