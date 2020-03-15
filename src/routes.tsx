import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DeptsPage from './pages/DeptsPage/DeptsPage';
import OperationsPage from './pages/OperationsPage/OperationsPage';
import WalletPage from './pages/WalletPage/WalletPage';
import StatisticPage from './pages/StatisticPage/StatisticPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';

export const getRoutes = (isAuthenticated: boolean) => {
    return isAuthenticated
        ? [
              { path: '/depts', exact: true, component: DeptsPage, label: 'Долги' },
              { path: '/operations', exact: true, component: OperationsPage, label: 'Операции' },
              { path: '/wallet', exact: true, component: WalletPage, label: 'Кошелёк' },
              { path: '/statistic', exact: true, component: StatisticPage, label: 'Статистика' },
              { path: '/settings', exact: true, component: SettingsPage, label: 'Настройки' },
          ]
        : [];
};

export const getRouting = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                {getRoutes(isAuthenticated).map((route) => (
                    <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                ))}
                <Redirect to="/depts" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Redirect to="/" />
        </Switch>
    );
};
