// import { Dispatch } from 'redux';
// import { getLocalStorage } from '../../services/localStorage/getLocalStorage';
import { AuthActionTypes } from './auth.types';

export const logIn = () => {
    return { type: AuthActionTypes.LOG_IN };
};

export const logOut = () => {
    return { type: AuthActionTypes.LOG_OUT };
};

// export const setAuth = () => {
//     return (dispatch: Dispatch) => {
//         const payload = !!getLocalStorage('userData');

//         dispatch({ type: 'SET_AUTH', payload });
//     };
// };
