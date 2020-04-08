import { getLocalStorage } from '../../services/localStorage/getLocalStorage';
import { Dept } from '../reducers/deptsReducer';

export const getDept = (id: string) => {
    const depts = getLocalStorage('deptsData');

    return depts.find((dept: Dept) => dept.id === id);
};
