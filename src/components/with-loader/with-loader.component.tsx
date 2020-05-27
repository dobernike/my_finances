import React from 'react';

import { Loader } from '../loader/loader.component';
import { ErrorBoundary } from '../error-boundary/error-boundary.component';

type Props = {
    isFetching: boolean;
    errorMessage: string;
};

export const WithLoader = (WrappedComponent: React.ComponentType) => ({
    isFetching,
    errorMessage,
    ...otherProps
}: Props) => {
    const Throw = ({ errorMessage }: { errorMessage: string }): never => {
        throw new Error(errorMessage);
    };

    return isFetching ? (
        <Loader />
    ) : (
        <ErrorBoundary>
            {errorMessage ? <Throw errorMessage={errorMessage} /> : <WrappedComponent {...otherProps} />}
        </ErrorBoundary>
    );
};
