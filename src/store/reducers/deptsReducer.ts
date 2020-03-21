export type Dept = {
    id: string;
    whom: string;
    amount: number;
    currency: string;
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
    // eslint-disable-next-line sonarjs/no-small-switch
    switch (action.type) {
        case 'FETCH_DEPTS':
            return { ...state, depts: [...state.depts, ...action.payload] };
        case 'DELETE_DEPT':
            return { ...state, depts: [...action.payload] };
        case 'CLEAR_DEPTS':
            return initialState;
        default:
            return state;
    }
};
