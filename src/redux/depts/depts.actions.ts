import { Dept } from './depts.reducer';

import { DeptsActionTypes } from './depts.types';

export const fetchDeptsStart = () => ({
    type: DeptsActionTypes.FETCH_DEPTS_START,
});

export const fetchDeptsSuccess = (depts: Dept[]) => ({
    type: DeptsActionTypes.FETCH_DEPTS_SUCCESS,
    payload: depts,
});

export const fetchDeptsFailure = (errorMessage: string) => ({
    type: DeptsActionTypes.FETCH_DEPTS_FAILURE,
    payload: errorMessage,
});

export const addDept = (dept: Dept) => ({
    type: DeptsActionTypes.ADD_DEPT,
    payload: dept,
});

export const deleteDept = (id: string) => ({
    type: DeptsActionTypes.DELETE_DEPT,
    payload: id,
});

export const updateDept = (dept: Dept) => ({
    type: DeptsActionTypes.UPDATE_DEPT,
    payload: dept,
});
