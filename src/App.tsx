import React from 'react';
import { connect } from 'react-redux';

import { Layout } from './components/layout/layout.component';

import { getRouting } from './routes';

import { RootState } from './redux/root-reducer';

type Props = {
    isAuthenticated: boolean;
};

class AppComponent extends React.PureComponent<Props> {
    render() {
        return <Layout>{getRouting(this.props.isAuthenticated)}</Layout>;
    }
}

export const App = connect((state: RootState) => ({ isAuthenticated: state.auth.isAuthenticated }))(AppComponent);
