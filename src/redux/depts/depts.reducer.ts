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

export type DeptsState = {
    depts: Dept[];
    isFetching: boolean;
    errorMessage: string;
};

export type DeptsAction = {
    type: string;
    payload: Dept[] & Dept & string;
};

const initialState: DeptsState = {
    depts: [],
    isFetching: false,
    errorMessage: undefined,
};

export const deptsReducer = (state = initialState, action: DeptsAction) => {
    switch (action.type) {
        case DeptsActionTypes.FETCH_DEPTS_START:
            return {
                ...state,
                isFetching: true,
            };
        case DeptsActionTypes.FETCH_DEPTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                depts: action.payload,
            };
        case DeptsActionTypes.FETCH_DEPTS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            };
        case DeptsActionTypes.ADD_DEPT:
            return {
                ...state,
                depts: [...state.depts, action.payload],
            };
        case DeptsActionTypes.DELETE_DEPT:
            return {
                ...state,
                depts: getFilteredDepts(state.depts, action.payload),
            };
        case DeptsActionTypes.UPDATE_DEPT:
            return {
                ...state,
                depts: getUpdatedDepts(state.depts, action.payload),
            };
        default:
            return state;
    }
};
