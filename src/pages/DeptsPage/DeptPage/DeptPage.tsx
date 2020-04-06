import React, { PureComponent } from 'react';
import { Formik } from 'formik';
import { Button, InputGroup, Classes } from '@blueprintjs/core';
import styles from './DeptPage.css';

type Props = {
    deptId: string;
};

export default class DeptPage extends PureComponent<Props> {
    render() {
        const today = new Date().toISOString().substr(0, 10);

        return (
            <>
                <Formik
                    initialValues={{
                        whom: '',
                        amount: '',
                        currency: 'RUB',
                        date: today,
                        comment: '',
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}>
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <fieldset className={styles.fieldset}>
                                <legend className={styles.legend}>Personal Information:</legend>
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

                                <Button type="submit" large disabled={isSubmitting}>
                                    Добавить
                                </Button>
                            </fieldset>
                        </form>
                    )}
                </Formik>
            </>
        );
    }
}
