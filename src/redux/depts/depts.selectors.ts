import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

const selectDepts = (state: RootState) => state.depts;

export const selectItems = createSelector([selectDepts], (depts) => depts.depts);

export const selectIsFetching = createSelector([selectDepts], (depts) => depts.isFetching);

export const selectErrorMessage = createSelector([selectDepts], (depts) => depts.errorMessage);
