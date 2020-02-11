import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import ErrorBoundary from './components/ErrorBoundary';

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ErrorBoundary>
                    <div>app</div>
                </ErrorBoundary>
            </Provider>
        );
    }
}
