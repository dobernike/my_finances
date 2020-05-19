import React, { ReactNode } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';

import { HeaderContainer } from './header.container';

import { rootReducer } from '../../redux/root-reducer';

const renderWithRedux = (ui: ReactNode, state = { auth: { isAuthenticated: true } }) => {
    const store = createStore(rootReducer, state);

    return {
        ...render(
            <Provider store={store}>
                <Router>{ui}</Router>
            </Provider>
        ),
        store,
    };
};

describe('<Header />', () => {
    it('should renders "Выйти" with state isAuthenticated equal false', () => {
        const { getByText } = renderWithRedux(<HeaderContainer />);

        expect(getByText(/выйти/i)).toBeTruthy();
    });

    it('should renders "Войти" with state isAuthenticated equal false', () => {
        const { getByText } = renderWithRedux(<HeaderContainer />, { auth: { isAuthenticated: false } });

        expect(getByText(/войти/i)).toBeTruthy();
    });

    it('should renders nav menu with state isAuthenticated equal true', () => {
        const { getAllByText } = renderWithRedux(<HeaderContainer />);

        expect(getAllByText(/долги/i)).toBeTruthy();
        expect(getAllByText(/операции/i)).toBeTruthy();
        expect(getAllByText(/кошелёк/i)).toBeTruthy();
        expect(getAllByText(/статистика/i)).toBeTruthy();
        expect(getAllByText(/настройки/i)).toBeTruthy();
    });

    it('should not renders nav menu with state isAuthenticated equal false', () => {
        const { queryByText } = renderWithRedux(<HeaderContainer />, { auth: { isAuthenticated: false } });

        expect(queryByText(/долги/i)).toBeFalsy();
        expect(queryByText(/операции/i)).toBeFalsy();
        expect(queryByText(/кошелёк/i)).toBeFalsy();
        expect(queryByText(/статистика/i)).toBeFalsy();
        expect(queryByText(/настройки/i)).toBeFalsy();
    });

    it('should hide "настройки" when "выйти" button clicked', () => {
        const { getByText, getAllByText, queryByText } = renderWithRedux(<HeaderContainer />);

        expect(getByText(/выйти/i)).toBeTruthy();
        expect(getAllByText(/настройки/i)).toBeTruthy();

        fireEvent.click(getByText(/выйти/i));

        expect(queryByText(/настройки/i)).toBeFalsy();
    });

    it('should show "настройки" when "войти" button clicked', () => {
        const { getByText, getAllByText, queryByText } = renderWithRedux(<HeaderContainer />, {
            auth: { isAuthenticated: false },
        });

        expect(queryByText(/настройки/i)).toBeFalsy();

        fireEvent.click(getByText(/войти/i));

        expect(getAllByText(/настройки/i)).toBeTruthy();
    });

    it('should show drawer with "small-cross" when menu button clicked', () => {
        const { container, getByText, queryByText } = renderWithRedux(<HeaderContainer />);
        const menuButton = container.querySelector('.menuButton');

        expect(queryByText(/small-cross/i)).toBeFalsy();

        fireEvent.click(menuButton);

        expect(getByText(/small-cross/i)).toBeTruthy();
    });
});
