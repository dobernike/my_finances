import React, { Component } from 'react';
import { Link } from '@reach/router';
import cx from 'classnames';
import { Drawer, Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import styles from './Header.css';
import { RootState } from '../../store/reducers/rootReducer';
import routes from '../../routes';
import AuthButton from '../AuthButton/AuthButton';

type Props = {
    isAuthenticated: boolean;
};

type State = {
    isMenuOpened: boolean;
};

class Header extends Component<Props, State> {
    state = {
        isMenuOpened: false,
    };

    handleToggleMenu = () => {
        this.setState((state) => ({ isMenuOpened: !state.isMenuOpened }));
    };

    handleCloseMenu = () => {
        this.setState(() => ({ isMenuOpened: false }));
    };

    render() {
        const { isAuthenticated } = this.props;

        return (
            <header className={styles.header}>
                <div className={styles.banner}>
                    <Button className={styles.menuButton} onClick={this.handleToggleMenu} icon="menu" minimal />
                    <Drawer
                        isOpen={this.state.isMenuOpened}
                        onClose={this.handleCloseMenu}
                        canOutsideClickClose
                        hasBackdrop
                        position="left"
                        title="">
                        <ul className={styles.list}>
                            {routes
                                .filter((route) => (isAuthenticated ? route : !route.isPrivate))
                                .map(({ to, label }) => (
                                    <li key={label + to}>
                                        <Link
                                            className={styles.a}
                                            to={to}
                                            onClick={this.handleCloseMenu}
                                            getProps={({ isCurrent }) => ({
                                                style: { color: isCurrent ? 'black' : '' },
                                            })}>
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </Drawer>
                    <div className={styles.topWrapper}>
                        <Link to="/" className={styles.logoLink}>
                            <p className={styles.logo}>Мои финансы</p>
                        </Link>
                        <nav className={styles.topNavigation}>
                            <ul className={cx(styles.list, styles.navList)}>
                                {routes
                                    .filter((route) => (isAuthenticated ? route : !route.isPrivate))
                                    .map(({ to, label }) => (
                                        <li key={label + to} className={styles.item}>
                                            <Link
                                                className={styles.link}
                                                to={to}
                                                getProps={({ isCurrent }) => ({
                                                    style: { color: isCurrent ? 'black' : '' },
                                                })}>
                                                {label}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </nav>
                    </div>
                    <AuthButton />
                </div>
                <div className={styles.bottomNavigation}>
                    <nav className={styles.navigation}>
                        <div className={styles.scrollBlock}>
                            <div className={styles.scrollContainer}>
                                <ul className={cx(styles.list, styles.navList)}>
                                    {routes
                                        .filter((route) => (isAuthenticated ? route : !route.isPrivate))
                                        .map(({ to, label }) => (
                                            <li key={label + to} className={styles.item}>
                                                <Link
                                                    className={styles.link}
                                                    to={to}
                                                    getProps={({ isCurrent }) => ({
                                                        style: { color: isCurrent ? 'black' : '' },
                                                    })}>
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default connect((state: RootState) => ({ isAuthenticated: state.auth.isAuthenticated }))(Header);
