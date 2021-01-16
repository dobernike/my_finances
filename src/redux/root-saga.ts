import { all, call } from 'redux-saga/effects';

import { deptsSagas } from './depts/depts.sagas';

export function* rootSaga() {
    yield all([call(deptsSagas)]);
}
