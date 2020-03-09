import React, { PureComponent, ReactNode } from 'react';
import styles from './Layout.css';
import Header from '../../components/Header/Header';

type Props = {
    children: ReactNode;
};

export default class Layout extends PureComponent<Props> {
    render() {
        return (
            <div className={styles.layout}>
                <Header />
                <main className={styles.main}>{this.props.children}</main>
            </div>
        );
    }
}
