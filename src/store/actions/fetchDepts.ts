import { Dispatch } from 'redux';
import { getLocalStorage } from '../../services/localStorage/getLocalStorage';
import { setLocalStorage } from '../../services/localStorage/setLocalSotorage';
import depts from '../../mocks/api/depts.mock.json';

export const fetchDepts = () => {
    return (dispatch: Dispatch) => {
        if (!getLocalStorage('deptsData')) {
            setLocalStorage('deptsData', depts.depts);
        }

        const payload = getLocalStorage('deptsData');

        dispatch({ type: 'FETCH_DEPTS', payload });
    };
};
