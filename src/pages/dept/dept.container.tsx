import { connect } from 'react-redux';

import { addDept, updateDept } from '../../redux/depts/depts.actions';

import { DeptPage } from './dept.component';

const mapDispatchToProps = {
    addDept,
    updateDept,
};

const DeptContainer = connect(null, mapDispatchToProps)(DeptPage);

export default DeptContainer;
