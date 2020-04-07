import { Dispatch } from 'redux';
import { getLocalStorage } from '../../services/localStorage/getLocalStorage';

export const setAuth = () => {
    return (dispatch: Dispatch) => {
        const payload = !!getLocalStorage('userData');

        dispatch({ type: 'SET_AUTH', payload });
    };
};
