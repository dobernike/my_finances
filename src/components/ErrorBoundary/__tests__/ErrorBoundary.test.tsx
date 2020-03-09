import React from 'react';
import { render } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';

describe('<ErrorBoundary />', () => {
    it('should renders "Children"', () => {
        const { getByText } = render(<ErrorBoundary>Children</ErrorBoundary>);

        expect(getByText(/children/i)).toBeTruthy();
    });

    it('should renders "Something went wrong." when an error is thrown', () => {
        const spy = jest.spyOn(console, 'error');

        spy.mockImplementation(() => {});

        const Throw = () => {
            throw new Error('bad');
        };

        const { getByText } = render(
            <ErrorBoundary>
                <Throw />
            </ErrorBoundary>
        );

        expect(getByText(/something went wrong./i)).toBeTruthy();

        spy.mockRestore();
    });
});
