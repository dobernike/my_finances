import { http } from '../../utils/http';

import { Depts, Dept } from './depts.reducer';

export const getDept = async (id: string) => {
    const depts: Depts = await http('http://localhost:3001/user-depts');

    return depts.find((dept) => dept.id === id);
};

export const getFilteredDepts = (depts: Depts, id: string): Depts => {
    return depts.filter((dept) => dept.id !== id);
};

export const getUpdatedDepts = (depts: Depts, updatedDept: Dept): Depts => {
    return depts.map((dept) => (dept.id === updatedDept.id ? updatedDept : dept));
};
