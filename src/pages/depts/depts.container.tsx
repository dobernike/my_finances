import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { RootState } from '../../redux/root-reducer';
import { DeptsState } from '../../redux/depts/depts.reducer';
import { fetchDeptsStart, deleteDept } from '../../redux/depts/depts.actions';
import { selectItems, selectIsFetching, selectErrorMessage } from '../../redux/depts/depts.selectors';

import { WithLoader } from '../../components/with-loader/with-loader.component';
import { DeptsPage } from './depts.component';

const mapStateToProps = createStructuredSelector<RootState, DeptsState>({
    depts: selectItems,
    isFetching: selectIsFetching,
    errorMessage: selectErrorMessage,
});

const mapDispatchToProps = {
    fetchDeptsStart,
    deleteDept,
};

const DeptsPageContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    WithLoader
)(DeptsPage) as React.ComponentType;

export default DeptsPageContainer;
