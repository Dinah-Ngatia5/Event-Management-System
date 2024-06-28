import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Sidebar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sidebar">
            <button className="menu-btn" onClick={toggleSidebar}>
                ☰ Sidebar List
            </button>

            <nav className={`sidebar-nav ${isOpen ? 'open' : ''}`}>
                <Link
                    to="/dashboard"
                    className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
                >
                    <i className="fas fa-tachometer-alt"></i> Dashboard
                </Link>
                <Link
                    to="/event-list"
                    className={`sidebar-link ${location.pathname === '/event-list' ? 'active' : ''}`}
                >
                    <i className="fas fa-list-alt"></i> Events List
                </Link>
                {/* <Link
                    to="/event-details/1"
                    className={`sidebar-link ${location.pathname === '/event-details/1' ? 'active' : ''}`}
                >
                    <i className="fas fa-info-circle"></i> Event Details
                </Link> */}
            </nav>
        </div>
    );
};

export default Sidebar;
