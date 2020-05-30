import { deptsReducer, DeptsState, DeptsAction } from '../depts.reducer';
import { DeptsActionTypes } from '../depts.types';

describe('user reducer', () => {
    it('should return the initial state', () => {
        const INITIAL_STATE: DeptsState = {
            depts: [],
            isFetching: false,
            errorMessage: undefined,
        };
        const action: DeptsAction = { type: 'undefined' };

        expect(deptsReducer(INITIAL_STATE, action)).toEqual(INITIAL_STATE);
    });
});
