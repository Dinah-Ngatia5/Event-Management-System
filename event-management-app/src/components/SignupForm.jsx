// src/components/SignupForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting, setStatus }) => {
    setStatus(null);

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: 'Signup successful!' });
      } else {
        setStatus({ error: data.message });
      }
    } catch (error) {
      setStatus({ error: 'Signup failed. Please try again.' });
    }

    setSubmitting(false);
  };

  return (
    <div>
      <h2>Signup</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting, status }) => (
          <Form>
            {status && status.error && <div style={{ color: 'red' }}>{status.error}</div>}
            {status && status.success && <div style={{ color: 'green' }}>{status.success}</div>}
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit" disabled={isSubmitting}>Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
