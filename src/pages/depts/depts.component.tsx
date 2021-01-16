import React, { MouseEvent } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from '@blueprintjs/core';

import { DeptsInnerTable } from '../../components/depts-inner-table/depts-inner-table.component';
import { Media } from '../../components/media/media.component';

import { Dept } from '../../redux/depts/depts.reducer';

import styles from './depts.styles.css';

type Props = {
    history: { push(to: string): void };
    match: { path: string };
    depts: Dept[];
    isFetching: boolean;
    errorMessage: string;
    deleteDept(id: string): void;
    fetchDeptsStart(): void;
};

export class DeptsPage extends React.Component<Props> {
    componentDidMount() {
        const { depts, fetchDeptsStart } = this.props;

        if (!depts.length) {
            fetchDeptsStart();
        }
    }

    handleAddDept = () => {
        const { history, match } = this.props;

        return history.push(`${match.path}/new`);
    };

    handleTableClick = (event: MouseEvent<HTMLTableSectionElement>) => {
        const { history, match, deleteDept } = this.props;
        const target = event.target as HTMLTableSectionElement;
        const { id } = target.closest('TR');
        const del = target.dataset.delete;

        if (del) {
            return deleteDept(id);
        }

        return history.push(`${match.path}/${id}`);
    };

    render() {
        const { depts } = this.props;

        return (
            <>
                <Button className={styles.add} onClick={this.handleAddDept}>
                    Добавить
                </Button>
                <Media.Mobile>
                    <Table hover size="sm" className={styles.table}>
                        <DeptsInnerTable depts={depts} onTableClick={this.handleTableClick} />
                    </Table>
                </Media.Mobile>
                <Media.DesktopOrTablet>
                    <Table hover size="xl" className={styles.table}>
                        <DeptsInnerTable depts={depts} onTableClick={this.handleTableClick} />
                    </Table>
                </Media.DesktopOrTablet>
            </>
        );
    }
}
