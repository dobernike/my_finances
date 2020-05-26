import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

const selectDepts = (state: RootState) => state.depts;

export const selectItems = createSelector([selectDepts], (depts) => depts.depts);
