import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch('https://events-management-backend-4q19.onrender.com/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });

      if (response.ok) {
        localStorage.removeItem('authToken');
        navigate('/login');
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
