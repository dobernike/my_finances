import { Dispatch } from 'redux';

import { DeptsActionTypes } from './depts.types';

import { http } from '../../utils/http';

import { Dept } from '../depts/depts.reducer';

export const fetchDepts = () => {
    return async (dispatch: Dispatch) => {
        const depts = await http('http://localhost:3001/user-depts');

        dispatch({
            type: DeptsActionTypes.FETCH_DEPTS,
            payload: depts,
        });
    };
};

export const addDept = (newDept: Dept) => {
    return async (dispatch: Dispatch) => {
        const dept = await http('http://localhost:3001/user-depts', 'POST', newDept);

        dispatch({
            type: DeptsActionTypes.ADD_DEPT,
            payload: dept,
        });
    };
};

export const deleteDept = (id: string) => {
    return async (dispatch: Dispatch) => {
        await http(`http://localhost:3001/user-depts/${id}`, 'DELETE');
        dispatch({ type: DeptsActionTypes.DELETE_DEPT, payload: id });
    };
};

export const updateDept = (updatedDept: Dept) => {
    return async (dispatch: Dispatch) => {
        const dept = await http(`http://localhost:3001/user-depts/${updatedDept.id}`, 'PUT', updatedDept);

        dispatch({
            type: DeptsActionTypes.UPDATE_DEPT,
            payload: dept,
        });
    };
};
