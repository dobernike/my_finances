import { getLocalStorage } from '../../services/localStorage/getLocalStorage';
import { Dept } from '../reducers/deptsReducer';
import { setLocalStorage } from '../../services/localStorage/setLocalSotorage';

export const addDept = (newDept: Dept) => {
    const depts = getLocalStorage('deptsData');

    depts.push(newDept);
    setLocalStorage('deptsData', depts);
    return { type: 'ADD_DEPT', payload: newDept };
};
