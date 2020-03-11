import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import store from './store/store';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './hoc/Layout/Layout';
import DeptsPage from './pages/DeptsPage';
import './constants/colors.css';

export default class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <ErrorBoundary>
                    <Layout>
                        <Router>
                            <DeptsPage path="/" />
                        </Router>
                    </Layout>
                </ErrorBoundary>
            </Provider>
        );
    }
}
