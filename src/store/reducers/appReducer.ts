export type Loading = boolean;

export type AppState = {
    loading: Loading;
};

type ShowLoaderAction = {
    type: string;
};

type HideLoaderAction = {
    type: string;
};

type AppAction = ShowLoaderAction | HideLoaderAction;

const initialState: AppState = {
    loading: false,
};

export const appReducer = (state = initialState, action: AppAction) => {
    switch (action.type) {
        case 'SHOW_LOADER':
            return { ...state, loading: true };
        case 'HIDE_LOADER':
            return { ...state, loading: false };
        default:
            return state;
    }
};
