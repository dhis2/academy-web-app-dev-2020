/** @TODO: Import the following components and functions from `@dhis2/ui`
 * Button, InputFieldFF, SingleSelectFieldFF, SwitchFieldFF,
 * composeValidators, createEqualTo, email, hasValue
 */

import { ReactFinalForm } from '@dhis2/ui'
import React from 'react'
import styles from './Form.module.css'

/**
 * This is just a function to demonstrate the values when the form is submitted
 * It takes the form's values (which is an object), transforms it into readable JSON,
 * and then finally displays the values in an alert box
 *
 * @param {Object} values
 * @param {string} values.title
 * @param {string} values.surname
 * @param {string} values.firstname
 * @param {string} values.email
 * @param {string} values.email-confirmation
 * @param {bool} values.newsletter
 */
const alertValues = values => {
    const formattedValuesString = JSON.stringify(values, null, 2)
    alert(formattedValuesString)
}

const { Field } = ReactFinalForm

export const Form = () => (
    <div>
        <h1>Form</h1>

        <ReactFinalForm.Form onSubmit={alertValues}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <Field
                            name="title"
                            label="Title"
                            // @TODO: Use `SingleSelectFieldFF` as component
                            component={'span'}
                            className={styles.title}
                            // @TODO: Use `"none"` as initialValue
                            initialValue="none"
                            options={[
                                { label: 'Professor', value: 'prof' },
                                { label: 'Doctor', value: 'doc' },
                                { label: 'None', value: 'none' },
                            ]}
                        />
                    </div>

                    <div className={styles.row}>
                        <Field
                            required
                            name="surname"
                            label="Surname"
                            // @TODO: Use the `InputFieldFF` compmonent
                            component={'span'}
                            className={styles.surname}
                            // @TODO: Use the `hasValue` validator
                            validate={() => undefined}
                        />

                        <Field
                            required
                            name="firstname"
                            label="First name"
                            // @TODO: Use the `InputFieldFF` compmonent
                            component={'span'}
                            className={styles.firstname}
                            // @TODO: Use the `hasValue` validator
                            validate={() => undefined}
                        />
                    </div>

                    <div className={styles.row}>
                        <Field
                            required
                            name="email"
                            label="E-mail address"
                            // @TODO: Use the `InputFieldFF` component
                            component={'span'}
                            className={styles.email}
                            // @TODO: Supply validator composition of `email` & `hasValue`
                            validate={() => undefined}
                        />
                    </div>

                    <div className={styles.row}>
                        <Field
                            required
                            name="email-confirmation"
                            label="Confirm e-mail address"
                            // @TODO: Use the `InputFieldFF` component
                            component={'span'}
                            className={styles.email}
                            // @TODO: Supply validator composition of `createEqualTo('email')` & `hasValue`
                            validate={() => undefined}
                        />
                    </div>

                    <div className={styles.row}>
                        <Field
                            type="checkbox"
                            name="newsletter"
                            label="I want to receive the newsletter"
                            // @TODO: Use the `SwitchFieldFF` component
                            component={'span'}
                            className={styles.newsletters}
                            initialValue={false}
                        />
                    </div>

                    <div className={styles.row}>
                        <span
                            // @TODO: Use the `Button` component
                            // @TODO: Use `type="submit"` to be able to submit the form with the mouse
                            // @TODO: Use the button's primary variant
                        >
                            Submit form
                        </span>
                    </div>
                </form>
            )}
        </ReactFinalForm.Form>
    </div>
)
