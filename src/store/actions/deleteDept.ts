import { getLocalStorage } from '../../services/localStorage/getLocalStorage';
import { Dept } from '../reducers/deptsReducer';
import { setLocalStorage } from '../../services/localStorage/setLocalSotorage';

export const deleteDept = (id: string) => {
    const depts = getLocalStorage('deptsData');
    const updatedDepts = depts.filter((dept: Dept) => dept.id !== id);

    setLocalStorage('deptsData', updatedDepts);
    return { type: 'DELETE_DEPT', payload: updatedDepts };
};
