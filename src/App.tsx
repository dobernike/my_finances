import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Layout from './hoc/Layout/Layout';
import { RootState } from './store/reducers/rootReducer';
import { getRouting } from './routes';
import './constants/colors.css';

type Props = {
    isAuthenticated: boolean;
};

class App extends PureComponent<Props> {
    render() {
        const routing = getRouting(this.props.isAuthenticated);

        return (
            <ErrorBoundary>
                <Router>
                    <Layout>{routing}</Layout>
                </Router>
            </ErrorBoundary>
        );
    }
}

export default connect((state: RootState) => ({ isAuthenticated: state.auth.isAuthenticated }))(App);
