import { removeLocalStorage } from '../../services/localStorage/removeLocalStorage';

export const logOut = () => {
    removeLocalStorage('userData');
    return { type: 'LOG_OUT' };
};
