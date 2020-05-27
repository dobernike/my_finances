import { http } from '../../utils/http';

import { Dept } from './depts.reducer';

export const getDept = async (id: string) => {
    const depts: Dept[] = await http('http://localhost:3001/user-depts');

    return depts.find((dept) => dept.id === id);
};

export const getFilteredDepts = (depts: Dept[], id: string): Dept[] => {
    return depts.filter((dept) => dept.id !== id);
};

export const getUpdatedDepts = (depts: Dept[], updatedDept: Dept): Dept[] => {
    return depts.map((dept) => (dept.id === updatedDept.id ? updatedDept : dept));
};
