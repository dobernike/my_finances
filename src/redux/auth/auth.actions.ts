// import { Dispatch } from 'redux';
// import { getLocalStorage } from '../../services/localStorage/getLocalStorage';
import { storage } from '../../services/storage';

export const logIn = () => {
    storage('userData', 'login');
    return { type: 'LOG_IN' };
};

export const logOut = () => {
    storage('userData', 'logout');
    return { type: 'LOG_OUT' };
};

// export const setAuth = () => {
//     return (dispatch: Dispatch) => {
//         const payload = !!getLocalStorage('userData');

//         dispatch({ type: 'SET_AUTH', payload });
//     };
// };
