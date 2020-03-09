import React, { PureComponent } from 'react';
import { Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import styles from './AuthButton.css';
import logIn from '../../store/actions/logIn';
import logOut from '../../store/actions/logOut';
import { RootState } from '../../store/reducers/rootReducer';

type Props = {
    isAuthenticated: boolean;
    logIn: () => void;
    logOut: () => void;
};

class AuthButton extends PureComponent<Props> {
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

export default connect((state: RootState) => ({ isAuthenticated: state.auth.isAuthenticated }), {
    logIn,
    logOut,
})(AuthButton);
