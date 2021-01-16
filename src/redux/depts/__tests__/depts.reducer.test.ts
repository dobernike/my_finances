import { deptsReducer, DeptsState, DeptsAction, Dept } from '../depts.reducer';
import { DeptsActionTypes } from '../depts.types';

describe('depts reducer', () => {
    let INITIAL_STATE: DeptsState;
    const DEPT: Dept = {
        id: '1',
        whom: 'Paul',
        amount: '5000',
        currency: 'RUB',
        date: '2020-05-30',
        comment: 'Comment',
    };

    beforeEach(() => {
        INITIAL_STATE = {
            depts: [],
            isFetching: false,
            errorMessage: undefined,
        };
    });

    it('should handle FETCH_DEPTS_START', () => {
        const action: DeptsAction = { type: DeptsActionTypes.FETCH_DEPTS_START };
        const state: DeptsState = {
            depts: [],
            isFetching: true,
            errorMessage: undefined,
        };

        expect(deptsReducer(INITIAL_STATE, action)).toEqual(state);
    });

    it('should handle FETCH_DEPTS_SUCCESS', () => {
        const depts = [{ ...DEPT }, { ...DEPT }];
        const action: DeptsAction = {
            type: DeptsActionTypes.FETCH_DEPTS_SUCCESS,
            payload: depts,
        };
        const state: DeptsState = {
            depts,
            isFetching: false,
            errorMessage: undefined,
        };

        expect(deptsReducer(INITIAL_STATE, action)).toEqual(state);
    });

    it('should handle FETCH_DEPTS_FAILURE', () => {
        const errorMessage = 'errorMessage';
        const action: DeptsAction = {
            type: DeptsActionTypes.FETCH_DEPTS_FAILURE,
            payload: errorMessage,
        };
        const state: DeptsState = {
            depts: [],
            isFetching: false,
            errorMessage,
        };

        expect(deptsReducer(INITIAL_STATE, action)).toEqual(state);
    });

    it('should handle ADD_DEPT', () => {
        const action: DeptsAction = {
            type: DeptsActionTypes.ADD_DEPT,
            payload: DEPT,
        };
        const state: DeptsState = {
            depts: [DEPT],
            isFetching: false,
            errorMessage: undefined,
        };

        expect(deptsReducer(INITIAL_STATE, action)).toEqual(state);
    });

    it('should handle DELETE_DEPT', () => {
        INITIAL_STATE = {
            depts: [DEPT],
            isFetching: false,
            errorMessage: undefined,
        };
        const action: DeptsAction = {
            type: DeptsActionTypes.DELETE_DEPT,
            payload: DEPT.id,
        };
        const state: DeptsState = {
            depts: [],
            isFetching: false,
            errorMessage: undefined,
        };

        expect(deptsReducer(INITIAL_STATE, action)).toEqual(state);
    });

    it('should handle UPDATE_DEPT', () => {
        INITIAL_STATE = {
            depts: [DEPT],
            isFetching: false,
            errorMessage: undefined,
        };
        const updatedDept = { ...DEPT, amount: '50' };
        const action: DeptsAction = {
            type: DeptsActionTypes.UPDATE_DEPT,
            payload: updatedDept,
        };
        const state: DeptsState = {
            depts: [updatedDept],
            isFetching: false,
            errorMessage: undefined,
        };

        expect(deptsReducer(INITIAL_STATE, action)).toEqual(state);
    });
});
