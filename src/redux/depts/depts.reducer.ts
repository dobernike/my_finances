import { DeptsActionTypes } from './depts.types';

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
    payload: Dept[];
};

type FetchAction = FetchDeptsAction;

const initialState: DeptsState = {
    depts: [],
};

export const deptsReducer = (state = initialState, action: FetchAction) => {
    switch (action.type) {
        case DeptsActionTypes.FETCH_DEPTS:
            return { ...state, depts: [...action.payload] };
        case DeptsActionTypes.ADD_DEPT:
            return { ...state, depts: [...state.depts, action.payload] };
        case DeptsActionTypes.DELETE_DEPT:
            return { ...state, depts: [...action.payload] };
        default:
            return state;
    }
};
