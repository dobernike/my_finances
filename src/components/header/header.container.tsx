import { connect } from 'react-redux';

import { RootState } from '../../redux/root-reducer';

import { Header } from './header.component';

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.user.isAuthenticated,
});

export const HeaderContainer = connect(mapStateToProps)(Header);
