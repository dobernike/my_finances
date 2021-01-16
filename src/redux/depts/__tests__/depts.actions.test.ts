import {
    fetchDeptsStart,
    fetchDeptsSuccess,
    fetchDeptsFailure,
    addDept,
    deleteDept,
    updateDept,
} from '../depts.actions';
import { DeptsActionTypes } from '../depts.types';
import { Dept } from '../depts.reducer';

describe('depts actions', () => {
    const DEPT: Dept = {
        id: '1',
        whom: 'Paul',
        amount: '5000',
        currency: 'RUB',
        date: '2020-05-30',
        comment: 'Comment',
    };

    describe('fetchDeptsStart', () => {
        it('should create an action to fetch depts start', () => {
            const action = { type: DeptsActionTypes.FETCH_DEPTS_START };

            expect(fetchDeptsStart()).toEqual(action);
        });
    });

    describe('fetchDeptsSuccess', () => {
        it('should create an action to fetch depts success', () => {
            const depts: Dept[] = [{ ...DEPT }, { ...DEPT }];
            const action = { type: DeptsActionTypes.FETCH_DEPTS_SUCCESS, payload: depts };

            expect(fetchDeptsSuccess(depts)).toEqual(action);
        });
    });

    describe('fetchDeptsFailure', () => {
        it('should create an action to fetch depts failure', () => {
            const errorMessage = 'error';
            const action = { type: DeptsActionTypes.FETCH_DEPTS_FAILURE, payload: errorMessage };

            expect(fetchDeptsFailure(errorMessage)).toEqual(action);
        });
    });

    describe('addDept', () => {
        it('should create an action to add dept', () => {
            const action = { type: DeptsActionTypes.ADD_DEPT, payload: DEPT };

            expect(addDept(DEPT)).toEqual(action);
        });
    });

    describe('deleteDept', () => {
        it('should create an action to delete dept', () => {
            const action = { type: DeptsActionTypes.DELETE_DEPT, payload: DEPT.id };

            expect(deleteDept(DEPT.id)).toEqual(action);
        });
    });

    describe('updateDept', () => {
        it('should create an action to update dept', () => {
            const action = { type: DeptsActionTypes.UPDATE_DEPT, payload: DEPT };

            expect(updateDept(DEPT)).toEqual(action);
        });
    });
});
