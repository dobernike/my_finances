import React, { MouseEvent } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from '@blueprintjs/core';

import { Media } from '../../components/media/media.component';

import { Depts } from '../../redux/depts/depts.reducer';

import styles from './depts.styles.css';

type Props = {
    history: { push(to: string): void };
    match: { path: string };
    depts: Depts;
    fetchDepts(): void;
    deleteDept(id: string): void;
};

export class DeptsPage extends React.Component<Props> {
    componentDidMount() {
        const { depts, fetchDepts } = this.props;

        if (!depts.length) {
            fetchDepts();
        }
    }

    handleAddDept = () => {
        const { history, match } = this.props;

        return history.push(`${match.path}/new`);
    };

    handleClick = (event: MouseEvent<HTMLTableSectionElement>) => {
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

        const tableBody = (
            <>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Кому</th>
                        <th>Сумма</th>
                        <th>Валюта</th>
                        <Media.Desktop>
                            <th>Дата</th>
                        </Media.Desktop>
                        <th>Комментарий</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody onClick={this.handleClick} role="presentation">
                    {depts.map((dept) => (
                        <tr key={dept.id} id={dept.id} className={styles.tr}>
                            <th>{dept.id}</th>
                            <td>{dept.whom}</td>
                            <td>{dept.amount}</td>
                            <td>{dept.currency}</td>
                            <Media.Desktop>
                                <td>{dept.date}</td>
                            </Media.Desktop>
                            <td>{dept.comment}</td>
                            <td data-delete>X</td>
                        </tr>
                    ))}
                </tbody>
            </>
        );

        return (
            <>
                <Button className={styles.add} onClick={this.handleAddDept}>
                    Добавить
                </Button>
                <Media.Mobile>
                    <Table hover size="sm" className={styles.table}>
                        {tableBody}
                    </Table>
                </Media.Mobile>
                <Media.DesktopOrTablet>
                    <Table hover size="xl" className={styles.table}>
                        {tableBody}
                    </Table>
                </Media.DesktopOrTablet>
            </>
        );
    }
}
