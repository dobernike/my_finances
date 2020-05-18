import React from 'react';

import { Header } from '../header/header.component';

import styles from './layout.styles.css';

type Props = {
    children: JSX.Element;
};

export class Layout extends React.PureComponent<Props> {
    render() {
        return (
            <div className={styles.layout}>
                <Header />
                <main className={styles.main}>{this.props.children}</main>
            </div>
        );
    }
}
