import { all, call, takeLatest, put, Effect } from 'redux-saga/effects';

import { fetchDeptsSuccess, fetchDeptsFailure } from './depts.actions';

import { request } from '../../utils/request';

import { Dept } from './depts.reducer';

import { DeptsActionTypes } from './depts.types';

export function* fetchDeptsAsync() {
    try {
        const depts: Dept[] = yield call(request, 'http://localhost:3001/user-depts');

        yield put(fetchDeptsSuccess(depts));
    } catch (error) {
        yield put(fetchDeptsFailure(error.message));
    }
}

export function* addDept({ payload }: Effect) {
    yield call(request, 'http://localhost:3001/user-depts', 'POST', payload);
}

export function* deleteDept({ payload }: Effect) {
    yield call(request, `http://localhost:3001/user-depts/${payload}`, 'DELETE');
}

export function* updateDept({ payload }: Effect) {
    yield call(request, `http://localhost:3001/user-depts/${payload.id}`, 'PUT', payload);
}

export function* fetchDeptsStart() {
    yield takeLatest(DeptsActionTypes.FETCH_DEPTS_START, fetchDeptsAsync);
}

export function* onAddDept() {
    yield takeLatest(DeptsActionTypes.ADD_DEPT, addDept);
}

export function* onDeleteDept() {
    yield takeLatest(DeptsActionTypes.DELETE_DEPT, deleteDept);
}

export function* onUpdateDept() {
    yield takeLatest(DeptsActionTypes.UPDATE_DEPT, updateDept);
}

export function* deptsSagas() {
    yield all([call(fetchDeptsStart), call(onAddDept), call(onDeleteDept), call(onUpdateDept)]);
}
