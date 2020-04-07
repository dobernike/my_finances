export type Dept = {
    id: string;
    whom: string;
    amount: number;
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
        case 'FETCH_DEPTS':
            return { ...state, depts: [...state.depts, ...action.payload] };
        case 'DELETE_DEPT':
            return { ...state, depts: [...action.payload] };
        default:
            return state;
    }
};
