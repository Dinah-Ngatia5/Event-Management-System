import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

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
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleToggle}
                    aria-controls="navbarSupportedContent"
                    aria-expanded={expanded}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse justify-content-end ${expanded ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item mr-4">
                            <Link className="nav-link " to="/">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link" to="/find-events">
                                <i className="fas fa-calendar-alt"></i> Events List
                            </Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link " to="/create-event">
                                <i className="fas fa-plus-square"></i> Create Event
                            </Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link className="nav-link" to="/login">
                                <i className="fas fa-sign-in-alt"></i> Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
