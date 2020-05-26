import { createSelector } from 'reselect';

import { RootState } from '../root-reducer';

const selectUser = (state: RootState) => state.user;

export const selectIsAuthenticated = createSelector([selectUser], (user) => user.isAuthenticated);
