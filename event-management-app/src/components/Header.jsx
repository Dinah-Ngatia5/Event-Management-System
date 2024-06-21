// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../css/Header.css';

const Header = () => {
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
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Form inline className="header-search">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <Link to="/event-list" className="nav-link">
                        <i className="fas fa-bell"></i>   
                    
                    </Link>
                    <Link to="/event-details/1" className="nav-link">
                        <i className="fas fa-user"></i>  
                        
                    </Link>
                    <Link to="/login" className="nav-link">
                        <i className="fas fa-sign-in-alt"></i> {/* Login icon */}
                        Login
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
