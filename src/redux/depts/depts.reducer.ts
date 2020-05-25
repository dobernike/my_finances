import { DeptsActionTypes } from './depts.types';
import { getFilteredDepts, getUpdatedDepts } from './depts.utils';

export type Dept = {
    id: string;
    whom: string;
    amount: string;
    currency: string;
    date: string;
    comment: string;
};

export type Depts = Dept[];

export type DeptsState = {
    depts: Depts;
};

type FetchDeptsAction = {
    type: string;
    payload: Depts & string;
};

type FetchAction = FetchDeptsAction;

const initialState: DeptsState = {
    depts: [],
};

export const deptsReducer = (state = initialState, action: FetchAction) => {
    let depts: Depts;

    switch (action.type) {
        case DeptsActionTypes.FETCH_DEPTS:
            return { ...state, depts: [...action.payload] };
        case DeptsActionTypes.ADD_DEPT:
            return { ...state, depts: [...state.depts, action.payload] };
        case DeptsActionTypes.DELETE_DEPT:
            depts = getFilteredDepts(state.depts, action.payload);
            return { ...state, depts };
        case DeptsActionTypes.UPDATE_DEPT:
            depts = getUpdatedDepts(state.depts, action.payload);
            return { ...state, depts };
        default:
            return state;
    }
};
