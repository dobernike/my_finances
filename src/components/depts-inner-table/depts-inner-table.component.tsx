import React from 'react';

import { Media } from '../media/media.component';

import { Dept } from '../../redux/depts/depts.reducer';

import styles from './depts-inner-table.styles.css';

type Props = {
    depts: Dept[];
    onTableClick(event: React.MouseEvent<HTMLTableSectionElement>): void;
};

export class DeptsInnerTable extends React.PureComponent<Props> {
    render() {
        const { depts, onTableClick } = this.props;

        return (
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
                <tbody onClick={onTableClick} role="presentation">
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
    }
}
