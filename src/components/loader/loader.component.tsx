import React from 'react';
import { Spinner } from '@blueprintjs/core';

import styles from './loader.styles.css';

export const Loader = () => (
    <div className={styles.loader}>
        <Spinner intent="primary" size={100} />
    </div>
);
