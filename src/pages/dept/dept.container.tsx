import { connect } from 'react-redux';
import { compose } from 'redux';

import { addDept, updateDept } from '../../redux/depts/depts.actions';

import { WithLoader } from '../../components/with-loader/with-loader.component';
import { DeptPage } from './dept.component';

const mapDispatchToProps = {
    addDept,
    updateDept,
};

const DeptPageContainer = compose(connect(null, mapDispatchToProps), WithLoader)(DeptPage);

export default DeptPageContainer;
