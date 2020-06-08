import { selectItems, selectIsFetching, selectErrorMessage } from '../depts.selectors';
import { DeptsState } from '../depts.reducer';

describe('depts selectors', () => {
    const deptsState: DeptsState = {
        depts: [],
        isFetching: false,
        errorMessage: 'error',
    };

    describe('selectItems', () => {
        it('should return depts.depts as []', () => {
            const selected = selectItems.resultFunc(deptsState);

            expect(selected).toEqual([]);
        });
    });

    describe('selectIsFetching', () => {
        it('should return depts.isFetching as boolean', () => {
            const selected = selectIsFetching.resultFunc(deptsState);

            expect(typeof selected).toEqual('boolean');
        });
    });

    describe('selectErrorMessage', () => {
        it('should return depts.errorMessage as string', () => {
            const selected = selectErrorMessage.resultFunc(deptsState);

            expect(typeof selected).toEqual('string');
        });
    });
});
