import { Dispatch } from 'redux';
import { getLocalStorage } from '../../services/localStorage/getLocalStorage';
import { showLoader } from './showLoader';
import { hideLoader } from './hideLoader';
import { setLocalStorage } from '../../services/localStorage/setLocalSotorage';
import depts from '../../mocks/api/depts.mock.json';

export const fetchDepts = () => {
    return (dispatch: Dispatch) => {
        try {
            dispatch(showLoader());

            if (!getLocalStorage('deptsData')) {
                setLocalStorage('deptsData', depts.depts);
            }

            const payload = getLocalStorage('deptsData');

            dispatch({ type: 'FETCH_DEPTS', payload });
            dispatch(hideLoader());
        } catch (e) {
            dispatch(hideLoader());
            throw e;
        }
    };
};
