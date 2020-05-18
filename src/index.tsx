import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store';

import { ErrorBoundary } from './components/error-boundary/error-boundary.component';

import { App } from './App';

import './constants/colors.css';
import './index.css';

render(
    <Provider store={store}>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
