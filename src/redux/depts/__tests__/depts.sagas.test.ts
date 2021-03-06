// @ts-nocheck
import { runSaga } from 'redux-saga';
import { Action } from 'redux';

import { fetchDeptsAsync } from '../depts.sagas';
import { fetchDeptsSuccess, fetchDeptsFailure } from '../depts.actions';
import { DeptsState } from '../depts.reducer';

import * as utils from '../../../utils/request';

describe('depts sagas', () => {
    const DEPT = {
        id: '1',
        whom: 'Paul',
        amount: '5000',
        currency: 'RUB',
        date: '2020-05-30',
        comment: 'Comment',
    };

    const INITIAL_STATE: DeptsState = {
        depts: [],
        isFetching: false,
        errorMessage: undefined,
    };

    let dispatchedActions: any[];
    let fakeStore: {};

    beforeEach(() => {
        dispatchedActions = [];
        fakeStore = {
            getState: () => INITIAL_STATE,
            dispatch: (action: Action) => dispatchedActions.push(action),
        };
    });

    describe('fetchDeptsAsync', () => {
        it('should load depts and handle them in case of success', async () => {
            const mockedDepts = [DEPT, DEPT];

            utils.request = jest.fn(() => Promise.resolve(mockedDepts));

            await runSaga(fakeStore, fetchDeptsAsync);

            expect(utils.request.mock.calls.length).toBe(1);
            expect(dispatchedActions).toContainEqual(fetchDeptsSuccess(mockedDepts));
        });

        it('should handle errors in case of fail', async () => {
            const error = { message: 'Some error is thrown' };

            utils.request = jest.fn(() => Promise.reject(error));

            await runSaga(fakeStore, fetchDeptsAsync);

            expect(utils.request.mock.calls.length).toBe(1);
            expect(dispatchedActions).toContainEqual(fetchDeptsFailure(error.message));
        });
    });
});
