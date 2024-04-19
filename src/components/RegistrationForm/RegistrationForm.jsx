// * Base
import { Formik } from 'formik';
import Field from '../Field/Field';

// * Components
import Button from '../Button/Button';
import FORM from '../helpers/form';

// * Styles
import styles from './RegistrationForm.module.css';

// * Local constants
const INITIAL_VALUES = { email: '', password: '', username: '', phone: '+380' };;

const RegistrationForm = () => {
  const validators = ({ email, username, password }) => {
    const errors = {};

    if (!email) {
      errors.email = 'Email required';
    } else if (!FORM.EMAIL_REG_EXP.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!username) {
      errors.username = 'Username required';
    } else if (username.length < FORM.USERNAME_MIN_LENGTH) {
      errors.username = `Username must consist not less of ${FORM.USERNAME_MIN_LENGTH} symbols`;
    }

    if (!password) {
      errors.password = 'Password required';
    } else if (password.length < FORM.PASSWORD_MIN_LENGTH) {
      errors.password = `Password must consist not less of ${FORM.PASSWORD_MIN_LENGTH} symbols`;
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    console.log('values: ', values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 3000);
  };

  return (
    <>
      <Formik
        preventDefault
        initialValues={INITIAL_VALUES}
        validate={validators}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Field
              title="Email"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email && touched.email && errors.email}
              placeholder="Enter email"
            />
            <Field
              title="Username"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.username && touched.username && errors.username}
              placeholder="Enter username"
            />
            <Field
              title="Password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password && touched.password && errors.password}
              placeholder="Enter password"
            />
            <Field
              title="Phone"
              type="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              type="text"
              name="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            {errors.username && touched.email && errors.username}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <input
              type="phone"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button> */}
            <Button type="submit" text="Submit" disabled={isSubmitting} />
          </form>
        )}
      </Formik>
    </>
  );
};

export default RegistrationForm;
