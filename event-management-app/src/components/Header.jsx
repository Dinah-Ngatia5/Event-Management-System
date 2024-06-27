import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import LogoutButton from './LogoutButton'; // Import the LogoutButton component
import '../css/Header.css';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const authToken = localStorage.getItem('authToken');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/event-list?search=${searchTerm}`);
        }
    };

    return (
        <Navbar bg="light" expand="lg" className="header-navbar">
            <Link to="/" className="navbar-brand">
                <img
                    src="https://img.freepik.com/free-vector/colorful-letter-v-icon-logo-design_474888-2568.jpg?t=st=1718700709~exp=1718704309~hmac=3723e2bc17378b28d71e26b83611abf0f8dc43fb2f8aff4b8be536bbbcda5589&w=740"
                    alt="EventSpark Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                EventsPark
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Form inline className="header-search" onSubmit={handleSearchSubmit}>
                    <FormControl
                        type="text"
                        placeholder="Search Events"
                        className="mr-sm-2"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        style={{ backgroundColor: 'transparent', color: '#eee', borderColor: '#ccc' }} // Adjust inline styles for background color, text color, and border color
                    />
                    <Button type="submit" className="search-button"
                        style={{ backgroundColor: 'gray', color: '#fff', border: 'none', transition: 'background-color 0.3s ease' }}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#4299f7'}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = 'gray'}
                    >
                        Search
                    </Button>
                </Form>
                <Nav className="ml-auto">
                    <Link to="/event-list" className="nav-link" style={{ color: '#000' }} onMouseOver={e => e.currentTarget.style.color = '#4299f7'} onMouseOut={e => e.currentTarget.style.color = '#000'}>
                        <i className="fas fa-bell"></i> Events
                    </Link>
                    <Link to="/event-details/1" className="nav-link" style={{ color: '#000' }} onMouseOver={e => e.currentTarget.style.color = '#4299f7'} onMouseOut={e => e.currentTarget.style.color = '#000'}>
                        <i className="fas fa-user"></i> Event Details
                    </Link>
                    <Link to="/login" className="nav-link" style={{ color: '#000' }} onMouseOver={e => e.currentTarget.style.color = '#4299f7'} onMouseOut={e => e.currentTarget.style.color = '#000'}>
                        <i className="fas fa-sign-in-alt"></i> Login
                    </Link>
                    <LogoutButton /> {/* Render the LogoutButton directly */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
