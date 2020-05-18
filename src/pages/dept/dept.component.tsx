import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import { Button, InputGroup, Classes, H1 } from '@blueprintjs/core';

import { Loader } from '../../components/loader/loader.component';

import { addDept, getDept } from '../../redux/depts/depts.actions';
import { Dept } from '../../redux/depts/depts.reducer';

import styles from './dept.styles.css';

function randomInteger(min: number, max: number) {
    // случайное число от min до (max+1)
    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}

type Props = {
    history: { goBack(): void };
    match: { params: { deptId: string } };
    addDept(newDept: Dept): void;
    getDept(id: string): Dept;
};

type State = {
    dept?: Dept;
};

class DeptPage extends React.Component<Props, State> {
    state: State = { dept: null };

    componentDidMount() {
        const { deptId } = this.props.match.params;

        if (deptId !== 'new') {
            const dept = getDept(deptId);

            this.setState({ dept });
        }
    }

    render() {
        const { deptId } = this.props.match.params;
        const { dept } = this.state;

        if (deptId !== 'new' && dept === null) {
            return <Loader />;
        }

        if (dept === undefined) {
            return <H1>Такой записи не существует</H1>;
        }

        const today = new Date().toISOString().substr(0, 10);

        return (
            <>
                <Formik
                    initialValues={{
                        id: dept ? dept.id : `${randomInteger(4, 99)}`,
                        whom: dept ? dept.whom : '',
                        amount: dept ? dept.amount : '',
                        currency: dept ? dept.currency : 'RUB',
                        date: dept ? dept.date : today,
                        comment: dept ? dept.comment : '',
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        this.props.addDept(values);
                        setSubmitting(false);
                        this.props.history.goBack();
                    }}>
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <fieldset className={styles.fieldset}>
                                <legend className={styles.legend}>
                                    {dept ? `Обновить данные:` : `Создать новую запись:`}
                                </legend>
                                <InputGroup
                                    name="whom"
                                    className={styles.item}
                                    value={values.whom}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    leftIcon="person"
                                    placeholder="Кому..."
                                    large
                                    required
                                />
                                <InputGroup
                                    name="amount"
                                    className={styles.item}
                                    value={values.amount}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    leftIcon="bank-account"
                                    placeholder="Сумма..."
                                    large
                                    required
                                />
                                <div className={`${Classes.SELECT} ${Classes.LARGE} ${styles.item} .modifier`}>
                                    <select name="currency" value={values.currency} onChange={handleChange}>
                                        <option value="RUB">₽</option>
                                        <option value="BYN">Br</option>
                                        <option value="USD">$</option>
                                        <option value="EUR">€</option>
                                    </select>
                                </div>
                                <InputGroup
                                    name="date"
                                    className={styles.item}
                                    value={values.date}
                                    onChange={handleChange}
                                    type="date"
                                    disabled={isSubmitting}
                                    leftIcon="calendar"
                                    large
                                    required
                                />
                                <InputGroup
                                    name="comment"
                                    className={styles.item}
                                    value={values.comment}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    leftIcon="comment"
                                    placeholder="Комментарий..."
                                    large
                                    required
                                />

                                <Button type="submit" className={styles.submit} large disabled={isSubmitting}>
                                    {dept ? `Обновить` : `Добавить`}
                                </Button>
                            </fieldset>
                        </form>
                    )}
                </Formik>
            </>
        );
    }
}

export default connect(null, { addDept })(DeptPage);
