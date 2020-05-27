import { all, call, takeLatest } from 'redux-saga/effects';

import { DeptsActionTypes } from './depts.types';

export function* fetchDepts() {
    yield DeptsActionTypes.FETCH_DEPTS;
}

export function* onFetchDepts() {
    yield takeLatest(DeptsActionTypes.FETCH_DEPTS, fetchDepts);
}

export function* deptsSagas() {
    yield all([call(onFetchDepts)]);
}
