import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { RootState } from '../../redux/root-reducer';
import { DeptsState } from '../../redux/depts/depts.reducer';
import { fetchDepts, deleteDept } from '../../redux/depts/depts.actions';
import { selectItems } from '../../redux/depts/depts.selectors';

import { DeptsPage } from './depts.component';

const mapStateToProps = createStructuredSelector<RootState, DeptsState>({
    depts: selectItems,
});

const mapDispatchToProps = {
    fetchDepts,
    deleteDept,
};

const DeptsContainer = connect(mapStateToProps, mapDispatchToProps)(DeptsPage);

export default DeptsContainer;
