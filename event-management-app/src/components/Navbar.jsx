import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img
                        src="https://img.freepik.com/free-vector/colorful-letter-v-icon-logo-design_474888-2568.jpg?t=st=1718700709~exp=1718704309~hmac=3723e2bc17378b28d71e26b83611abf0f8dc43fb2f8aff4b8be536bbbcda5589&w=740"
                        alt="EventSpark Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    EventSpark
                </Link>

                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                <i className="fas fa-sign-in-alt"></i> Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/event-list">
                                <i className="fas fa-calendar-alt"></i> Events
                            </Link>
                        </li>
                        
                        <li className="nav-item">

                            <Link className="nav-link" to="/event-details/1"> 

                            <Link className="nav-link" to="/event-details/1"> {/* Replace with actual event ID */}

                                Event Details
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
