import React, { PureComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import Table from 'react-bootstrap/Table';
import { Button } from '@blueprintjs/core';

export default class DeptsPage extends PureComponent<RouteComponentProps> {
    render() {
        return (
            <>
                <Button>Добавить</Button>
                <Table striped bordered hover size="sm">
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
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>x</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@mdo</td>
                            <td>@fat</td>
                            <td>x</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}
