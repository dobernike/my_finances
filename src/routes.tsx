import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Loader } from './components/loader/loader.component';

const SettingsPage = lazy(() => import('./pages/settings/settings.component'));
const StatisticPage = lazy(() => import('./pages/statistic/statistic.component'));
const WalletPage = lazy(() => import('./pages/wallet/wallet.component'));
const OperationsPage = lazy(() => import('./pages/operations/operations.component'));
const DeptsPage = lazy(() => import('./pages/depts/depts.container'));
const DeptPage = lazy(() => import('./pages/dept/dept.container'));

export const getRoutes = (isAuthenticated: boolean) => {
    return isAuthenticated
        ? [
              { path: '/depts', exact: true, component: DeptsPage, label: 'Долги' },
              { path: '/depts/:deptId', exact: true, component: DeptPage },
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
            <Suspense fallback={<Loader />}>
                <Switch>
                    {getRoutes(isAuthenticated).map((route) => (
                        <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
                    ))}
                    <Redirect to="/depts" />
                </Switch>
            </Suspense>
        );
    }

    return (
        <Switch>
            <Redirect to="/" />
        </Switch>
    );
};
