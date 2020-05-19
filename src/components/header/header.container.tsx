import { connect } from 'react-redux';
import { RootState } from 'src/redux/root-reducer';

import { Header } from './header.component';

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export const HeaderContainer = connect(mapStateToProps)(Header);
