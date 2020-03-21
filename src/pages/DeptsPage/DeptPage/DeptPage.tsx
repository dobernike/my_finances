import React, { PureComponent } from 'react';

type Props = {
    deptId: string;
};

export default class DeptPage extends PureComponent<Props> {
    render() {
        return <h1>DeptPage: {this.props.deptId}</h1>;
    }
}
