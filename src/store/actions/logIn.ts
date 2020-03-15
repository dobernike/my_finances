import { setLocalStorage } from '../../services/localStorage/setLocalSotorage';

export const logIn = () => {
    setLocalStorage('userData', 'login');
    return { type: 'LOG_IN' };
};
