import { Dept, Depts } from './depts.reducer';

export const getDept = async (id: string) => {
    try {
        const response = await fetch('http://localhost:3001/user-depts');
        const depts: Depts = await response.json();

        return depts.find((dept: Dept) => dept.id === id);
    } catch {
        return null;
    }
};
