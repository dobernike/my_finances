import React, { ErrorInfo } from 'react';

type Props = {
    children: JSX.Element;
};

type State = {
    isError: boolean;
    error?: Error;
    info?: ErrorInfo;
};

export class ErrorBoundary extends React.Component<Props, State> {
    state = { isError: false };

    static getDerivedStateFromError() {
        return { isError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        this.setState((state) => ({ ...state, error, info }));
    }

    render() {
        if (this.state.isError) {
            return <h1>Что-то пошло не так</h1>;
        }

        return this.props.children;
    }
}
