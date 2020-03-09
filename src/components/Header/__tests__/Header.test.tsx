import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import Header from '../Header';
import reducer, { initialState } from '../../../store/reducers/rootReducer';

const renderWithRedux = (ui: any, state = initialState) => {
    const store = createStore(reducer, state);

    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        store,
    };
};

describe('<Header />', () => {
    it('should renders "Выйти" with initialState', () => {
        const { getByText } = renderWithRedux(<Header />);

        expect(getByText(/выйти/i)).toBeTruthy();
    });

    it('should renders "Войти" with state isAuthenticated equal false', () => {
        const { getByText } = renderWithRedux(<Header />, { auth: { isAuthenticated: false } });

        expect(getByText(/войти/i)).toBeTruthy();
    });

    it('should renders "Настройки" with initialState', () => {
        const { getAllByText } = renderWithRedux(<Header />);

        expect(getAllByText(/настройки/i)).toBeTruthy();
    });

    it('should renders "Настройки" with state isAuthenticated equal false', () => {
        const { queryByText } = renderWithRedux(<Header />, { auth: { isAuthenticated: false } });

        expect(queryByText(/настройки/i)).toBeFalsy();
    });

    it('should hide "настройки" when "выйти" button clicked', () => {
        const { getByText, getAllByText, queryByText } = renderWithRedux(<Header />);

        expect(getByText(/выйти/i)).toBeTruthy();
        expect(getAllByText(/настройки/i)).toBeTruthy();

        fireEvent.click(getByText(/выйти/i));

        expect(queryByText(/настройки/i)).toBeFalsy();
    });

    it('should show "настройки" when "войти" button clicked', () => {
        const { getByText, getAllByText, queryByText } = renderWithRedux(<Header />, {
            auth: { isAuthenticated: false },
        });

        expect(queryByText(/настройки/i)).toBeFalsy();

        fireEvent.click(getByText(/войти/i));

        expect(getAllByText(/настройки/i)).toBeTruthy();
    });

    it('should show drawer with "small-cross" when menu button clicked', () => {
        const { container, getByText, queryByText } = renderWithRedux(<Header />);
        const menuButton = container.querySelector('.menuButton');

        expect(queryByText(/small-cross/i)).toBeFalsy();

        fireEvent.click(menuButton);

        expect(getByText(/small-cross/i)).toBeTruthy();
    });
});
