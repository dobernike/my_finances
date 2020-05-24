import { Dispatch } from 'redux';

import { DeptsActionTypes } from './depts.types';

import { http } from '../../utils/http';

import { storage } from '../../services/storage';

import { Dept } from '../depts/depts.reducer';

export const addDept = async (newDept: Dept) => {
    return async (dispatch: Dispatch) => {
        try {
            await http('http://localhost:3001/user-depts', 'POST', newDept);

            dispatch({
                type: DeptsActionTypes.ADD_DEPT,
                payload: newDept,
            });
        } catch {
            dispatch({
                type: 'DEFAULT',
            });
        }
    };
};

export const deleteDept = (id: string) => {
    const depts = storage('deptsData');
    const updatedDepts = depts.filter((dept: Dept) => dept.id !== id);

    storage('deptsData', updatedDepts);
    return { type: DeptsActionTypes.DELETE_DEPT, payload: updatedDepts };
};

export const fetchDepts = () => {
    return async (dispatch: Dispatch) => {
        const depts = await http('http://localhost:3001/user-depts');

        dispatch({
            type: DeptsActionTypes.FETCH_DEPTS,
            payload: depts,
        });
    };
};
