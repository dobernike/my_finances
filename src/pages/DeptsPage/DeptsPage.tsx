import React, { Component, MouseEvent } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { RootState } from '../../store/reducers/rootReducer';
import { Depts } from '../../store/reducers/deptsReducer';
import { Loading } from '../../store/reducers/appReducer';
import { Loader } from '../../components/Loader/Loader';
import { fetchDepts } from '../../store/actions/fetchDepts';
import { clearDepts } from '../../store/actions/clearDepts';
import { deleteDept } from '../../store/actions/deleteDept';
import styles from './DeptsPage.css';

type Props = {
    depts: Depts;
    loading: Loading;
    fetchDepts: () => void;
    clearDepts: () => void;
    deleteDept: (id: string) => void;
    history: { push: (to: string) => void };
    match: { path: string };
};

class DeptsPage extends Component<Props> {
    componentDidMount() {
        this.props.fetchDepts();
    }

    componentWillUnmount() {
        this.props.clearDepts();
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
        if (this.props.loading) {
            return <Loader />;
        }

        return (
            <>
                <Button className={styles.add} onClick={this.handleAddDept}>
                    Добавить
                </Button>
                <Table hover size="xl" className={styles.table}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Кому</th>
                            <th>Сумма</th>
                            <th>Валюта</th>
                            <th>Комментарий</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody onClick={this.handleClick} role="presentation">
                        {this.props.depts.map((dept) => (
                            <tr key={dept.id} id={dept.id} className={styles.tr}>
                                <th>{dept.id}</th>
                                <td>{dept.whom}</td>
                                <td>{dept.amount}</td>
                                <td>{dept.currency}</td>
                                <td>{dept.comment}</td>
                                <td data-delete>X</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default connect((state: RootState) => ({ depts: state.depts.depts, loading: state.app.loading }), {
    fetchDepts,
    clearDepts,
    deleteDept,
})(DeptsPage);
