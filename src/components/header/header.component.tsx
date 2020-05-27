import React from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { Drawer, Button } from '@blueprintjs/core';

import { AuthButtonContainer } from '../auth-button/auth-button.container';

import { getRoutes } from '../../routes';

import styles from './header.styles.css';

type Props = {
    isAuthenticated: boolean;
};

type State = {
    isMenuOpened: boolean;
};

export class Header extends React.Component<Props, State> {
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
        const { isMenuOpened } = this.state;
        const routes = getRoutes(isAuthenticated).filter((route) => route.label);

        return (
            <header className={styles.header}>
                <div className={styles.banner}>
                    <Button className={styles.menuButton} onClick={this.handleToggleMenu} icon="menu" minimal />
                    <Drawer
                        isOpen={isMenuOpened}
                        onClose={this.handleCloseMenu}
                        canOutsideClickClose
                        hasBackdrop
                        position="left"
                        title="">
                        <ul className={styles.list}>
                            {routes.map((route) => (
                                <li key={route.path}>
                                    <NavLink
                                        activeClassName={styles.linkActive}
                                        className={styles.a}
                                        to={route.path}
                                        onClick={this.handleCloseMenu}>
                                        {route.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </Drawer>
                    <div className={styles.topWrapper}>
                        <NavLink to="/" className={styles.logoLink}>
                            <p className={styles.logo}>Мои финансы</p>
                        </NavLink>
                        <nav className={styles.topNavigation}>
                            <ul className={cx(styles.list, styles.navList)}>
                                {routes.map((route) => (
                                    <li key={route.path} className={styles.item}>
                                        <NavLink
                                            activeClassName={styles.linkActive}
                                            className={styles.link}
                                            to={route.path}>
                                            {route.label}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <AuthButtonContainer />
                </div>
                <div className={styles.bottomNavigation}>
                    <nav className={styles.navigation}>
                        <div className={styles.scrollBlock}>
                            <div className={styles.scrollContainer}>
                                <ul className={cx(styles.list, styles.navList)}>
                                    {routes.map((route) => (
                                        <li key={route.path} className={styles.item}>
                                            <NavLink
                                                className={styles.link}
                                                to={route.path}
                                                activeClassName={styles.linkActive}>
                                                {route.label}
                                            </NavLink>
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
