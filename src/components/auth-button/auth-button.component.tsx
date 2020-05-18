import React from 'react';
import { Button } from '@blueprintjs/core';
import { connect } from 'react-redux';

import { logIn, logOut } from '../../redux/auth/auth.actions';
import { RootState } from '../../redux/root-reducer';

import styles from './auth-button.styles.css';

type Props = {
    isAuthenticated: boolean;
    logIn(): void;
    logOut(): void;
};

class AuthButtonContainer extends React.PureComponent<Props> {
    render() {
        return this.props.isAuthenticated ? (
            <Button onClick={this.props.logOut} className={styles.button}>
                Выйти
            </Button>
        ) : (
            <Button onClick={this.props.logIn} className={styles.button}>
                Войти
            </Button>
        );
    }
}

export const AuthButton = connect((state: RootState) => ({ isAuthenticated: state.auth.isAuthenticated }), {
    logIn,
    logOut,
})(AuthButtonContainer);
