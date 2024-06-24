import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Send a request to the backend to clear the session
      const response = await fetch('http://127.0.0.1:5000/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include' // Make sure cookies are sent with the request
      });

      if (response.ok) {
        
        localStorage.removeItem('authToken');
        navigate('/login'); // Redirect to the login page
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <Button
      variant="contained"
      className='logout-button'
      color="secondary"
      onClick={handleLogout}
      sx={{ backgroundColor: '#d32f2f' }}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
