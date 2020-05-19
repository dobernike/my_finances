import { connect } from 'react-redux';
import { RootState } from 'src/redux/root-reducer';

import { AuthButton } from './auth-button.component';

import { logIn, logOut } from '../../redux/auth/auth.actions';

const mapStateToProps = (state: RootState) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
    logIn,
    logOut,
};

export const AuthButtonContainer = connect(mapStateToProps, mapDispatchToProps)(AuthButton);
