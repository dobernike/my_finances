import { getDept, getFilteredDepts, getUpdatedDepts } from '../depts.utils';
import { Dept } from '../depts.reducer';

describe('depts utils', () => {
    const DEPT1: Dept = {
        id: '1',
        whom: 'Paul',
        amount: '5000',
        currency: 'RUB',
        date: '2020-05-30',
        comment: 'Comment',
    };

    const DEPT2: Dept = {
        id: '2',
        whom: 'John',
        amount: '200',
        currency: 'EURO',
        date: '2020-05-31',
        comment: 'Don`t know',
    };

    const depts = [DEPT1, DEPT2];

    describe('getDept', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (global as any).fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(depts),
            })
        );

        it('should w/ reacheble id return DEPT with him id', async () => {
            expect(await getDept(DEPT1.id)).toEqual(DEPT1);
            expect(await getDept(DEPT2.id)).toEqual(DEPT2);
        });

        it('should w/ unreachable id return undefined', async () => {
            const id = '123';

            expect(await getDept(id)).toEqual(undefined);
        });
    });

    describe('getFilteredDepts', () => {
        it('should return filtered depts w/o DEPT there second param equal id', () => {
            expect(getFilteredDepts(depts, DEPT1.id)).toEqual([DEPT2]);
            expect(getFilteredDepts(depts, DEPT2.id)).toEqual([DEPT1]);
        });

        it('should w/ unreachable id return depts', async () => {
            const id = '123';

            expect(getFilteredDepts(depts, id)).toEqual(depts);
        });
    });

    describe('getUpdatedDepts', () => {
        it('should return updated depts w/ update DEPT there second param equal updated DEPT', () => {
            const updatedDept1: Dept = { ...DEPT1, amount: '50000' };

            expect(getUpdatedDepts(depts, updatedDept1)).not.toEqual([DEPT1, DEPT2]);
            expect(getUpdatedDepts(depts, updatedDept1)).toEqual([updatedDept1, DEPT2]);
        });

        it('should w/ unreachable id return depts', async () => {
            const unreachableDept: Dept = {
                id: '123',
                whom: 'unknown',
                amount: '0',
                currency: 'RUB',
                date: '2020-05-30',
                comment: '...',
            };

            expect(getUpdatedDepts(depts, unreachableDept)).toEqual(depts);
        });
    });
});
