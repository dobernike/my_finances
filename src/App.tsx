import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Layout } from './components/layout/layout.component';

import { getRouting } from './routes';

import { RootState } from './redux/root-reducer';
import { selectIsAuthenticated } from './redux/user/user.selectors';
import { UserState } from './redux/user/user.reducer';

type Props = {
    isAuthenticated: boolean;
};

class AppComponent extends React.PureComponent<Props> {
    render() {
        return <Layout>{getRouting(this.props.isAuthenticated)}</Layout>;
    }
}

const mapStateToProps = createStructuredSelector<RootState, UserState>({
    isAuthenticated: selectIsAuthenticated,
});

export const App = connect(mapStateToProps)(AppComponent);
