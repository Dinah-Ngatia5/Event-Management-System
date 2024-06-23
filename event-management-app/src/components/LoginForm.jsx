import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';

const LoginForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post('http://localhost:5000/login', values, { withCredentials: true });
                if (response.status === 200) {
                    navigate('/');
                }
            } catch (error) {
                console.error('Login failed', error);
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography variant="h5" gutterBottom>Login</Typography>
            <Box sx={{ '& > :not(style)': { marginBottom: 2 } }}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
            </Box>
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
            <Typography variant="body2">
                Dont have an account? <Link to="/signup">Sign Up</Link>
            </Typography>
        </form>
    );
};

export default LoginForm;

