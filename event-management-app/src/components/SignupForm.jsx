import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';

const SignupForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        };

        try {
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Signup failed');
            }

            // Redirect to profile page or home page
            navigate('/profile');
        } catch (error) {
            console.error('Error:', error);
            alert('Signup failed');
        }
    };

    return (
        <Box 
            component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 3, maxWidth: '400px', mx: 'auto' }}
        >
            <Typography variant="h4" component="h1" gutterBottom>
                Sign Up
            </Typography>
            <TextField
                id="username"
                name="username"
                label="Username"
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="email"
                name="email"
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <TextField
                id="password"
                name="password"
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                variant="outlined"
            />
            <Button 
                type="submit" 
                variant="contained" 
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
            >
                Sign Up
            </Button>
        </Box>
    );
};

export default SignupForm;
