import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from './ErrorBoundary.css';

type Props = {
    children: ReactNode;
};

type State = {
    error?: Error;
    errorInfo?: ErrorInfo;
};

export default class ErrorBoundary extends Component<Props, State> {
    state: State = {};

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error,
            errorInfo,
        });
    }

    render() {
        const { error, errorInfo } = this.state;

        if (!errorInfo) {
            return this.props.children;
        }

        return (
            <div>
                <h2>Something went wrong.</h2>
                <details className={styles.details}>
                    {error && error.toString()}
                    {errorInfo.componentStack}
                </details>
            </div>
        );
    }
}
