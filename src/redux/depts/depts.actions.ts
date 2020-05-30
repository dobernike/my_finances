import { Dept } from './depts.reducer';

import { DeptsActionTypes, FETCH_DEPTS_FAILURE, FETCH_DEPTS_SUCCESS } from './depts.types';

export type FetchDeptsStartAction = {
    type: typeof DeptsActionTypes.FETCH_DEPTS_START;
};

export const fetchDeptsStart = (): FetchDeptsStartAction => ({
    type: DeptsActionTypes.FETCH_DEPTS_START,
});

export type FetchDeptsSuccessAction = {
    type: typeof FETCH_DEPTS_SUCCESS;
    payload: Dept[];
};

export const fetchDeptsSuccess = (depts: Dept[]): FetchDeptsSuccessAction => ({
    type: FETCH_DEPTS_SUCCESS,
    payload: depts,
});

export type FetchDeptsFailureAction = {
    type: typeof FETCH_DEPTS_FAILURE;
};

export const fetchDeptsFailure = (errorMessage: string) => ({
    type: FETCH_DEPTS_FAILURE,
    payload: errorMessage,
});

export type AddDeptAction = {
    type: typeof DeptsActionTypes.ADD_DEPT;
    payload: Dept;
};

export const addDept = (dept: Dept): AddDeptAction => ({
    type: DeptsActionTypes.ADD_DEPT,
    payload: dept,
});

export type DeleteDeptAction = {
    type: typeof DeptsActionTypes.DELETE_DEPT;
    payload: string;
};

export const deleteDept = (id: string): DeleteDeptAction => ({
    type: DeptsActionTypes.DELETE_DEPT,
    payload: id,
});

export type UpdateDeptAction = {
    type: typeof DeptsActionTypes.UPDATE_DEPT;
    payload: Dept;
};

export const updateDept = (dept: Dept): UpdateDeptAction => ({
    type: DeptsActionTypes.UPDATE_DEPT,
    payload: dept,
});
