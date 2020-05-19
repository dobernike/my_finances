import React from 'react';
import { Button } from '@blueprintjs/core';

import styles from './auth-button.styles.css';

type Props = {
    isAuthenticated: boolean;
    logIn(): void;
    logOut(): void;
};

export class AuthButton extends React.PureComponent<Props> {
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
