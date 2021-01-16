import React from 'react';
import { render } from '@testing-library/react';

import { ErrorBoundary } from './error-boundary.component';

describe('<ErrorBoundary />', () => {
    it('should renders "Children"', () => {
        const { getByText } = render(
            <ErrorBoundary>
                <p>children</p>
            </ErrorBoundary>
        );

        expect(getByText(/children/i)).toBeTruthy();
    });

    it('should renders "Что-то пошло не так" when an error is thrown', () => {
        const spy = jest.spyOn(console, 'error').mockImplementation();

        const Throw = () => {
            throw new Error('bad');
        };

        const { getByText } = render(
            <ErrorBoundary>
                <Throw />
            </ErrorBoundary>
        );

        expect(getByText(/что-то пошло не так/i)).toBeTruthy();

        spy.mockRestore();
    });
});
