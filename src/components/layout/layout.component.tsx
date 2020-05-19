import React from 'react';

import { HeaderContainer } from '../header/header.container';

import styles from './layout.styles.css';

type Props = {
    children: JSX.Element;
};

export class Layout extends React.PureComponent<Props> {
    render() {
        return (
            <div className={styles.layout}>
                <HeaderContainer />
                <main className={styles.main}>{this.props.children}</main>
            </div>
        );
    }
}
