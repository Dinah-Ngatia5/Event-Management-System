import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../css/index.css';

const SignupForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await fetch('https://events-management-backend-4q19.onrender.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.fullName,
                    email: values.email,
                    password: values.password,
                }),
                credentials: 'include',
            });

            if (response.ok) {
                navigate('/login'); 
            } else {
                const data = await response.json();
                console.error('Error:', data);
                alert(data.error);
            }
        } catch (error) {
            console.error('Submission error:', error);
        }
        setSubmitting(false);
    };

    const initialValues = {
        fullName: '',
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    });

    return (
        <div className="signup-container">
            <div className="background-image">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1694627570727-4Z839ITBKYQUD67EZ9MI/52438307865_d0b07f02c1_o+%282%29.jpg?format=1500w"
                    alt="Signup Background"
                    className="signup-background"
                />
            </div>
            <div className="form-container">
                <h3>Sign Up</h3>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {({ isSubmitting }) => (
                        <Form className="signup-form">
                            <label htmlFor="fullName">Full Name:</label>
                            <Field type="text" id="fullName" name="fullName" />
                            <ErrorMessage name="fullName" component="div" className="error-message" />

                            <label htmlFor="email">Email:</label>
                            <Field type="email" id="email" name="email" placeholder="email to login..." />
                            <ErrorMessage name="email" component="div" className="error-message" />

                            <label htmlFor="password">Password:</label>
                            <Field type="password" id="password" name="password" placeholder="pass for login..." />
                            <ErrorMessage name="password" component="div" className="error-message" />

                            <button type="submit" className="signup-button" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Sign Up'}
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="mt-3">
                    Already have an account? <Link to="/login">Login here</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
