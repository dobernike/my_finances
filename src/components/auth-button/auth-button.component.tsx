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
        const { isAuthenticated, logIn, logOut } = this.props;

        return isAuthenticated ? (
            <Button onClick={logOut} className={styles.button}>
                Выйти
            </Button>
        ) : (
            <Button onClick={logIn} className={styles.button}>
                Войти
            </Button>
        );
    }
}
