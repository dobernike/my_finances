import { Dispatch } from 'redux';

import { DeptsActionTypes } from './depts.types';

import { storage } from '../../services/storage';

import { Dept } from '../depts/depts.reducer';

import depts from '../../mocks/api/depts.mock.json';

export const addDept = (newDept: Dept) => {
    const depts = storage('deptsData');

    depts.push(newDept);
    storage('deptsData', depts);
    return {
        type: DeptsActionTypes.ADD_DEPT,
        payload: newDept,
    };
};

export const deleteDept = (id: string) => {
    const depts = storage('deptsData');
    const updatedDepts = depts.filter((dept: Dept) => dept.id !== id);

    storage('deptsData', updatedDepts);
    return { type: DeptsActionTypes.DELETE_DEPT, payload: updatedDepts };
};

export const fetchDepts = () => {
    return (dispatch: Dispatch) => {
        if (!storage('deptsData')) {
            storage('deptsData', depts.depts);
        }

        const payload = storage('deptsData');

        dispatch({ type: DeptsActionTypes.FETCH_DEPTS, payload });
    };
};

export const getDept = (id: string) => {
    const depts = storage('deptsData');

    return depts.find((dept: Dept) => dept.id === id);
};
