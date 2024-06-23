import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-gray py-4">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="text-left">
                        <p className="mb-0">© 2024 City and Country. All rights reserved. | EventSpark</p>
                    </Col>
                    <Col xs={12} md={6} className="text-right">
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <img src="https://simpleicons.org/icons/facebook.svg" alt="Facebook" style={iconStyle} className="social-icon" />
                            </a>

                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <img src="https://simpleicons.org/icons/instagram.svg" alt="Instagram" style={iconStyle} className="social-icon ml-2" />
                            </a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <img src="https://simpleicons.org/icons/linkedin.svg" alt="LinkedIn" style={iconStyle} className="social-icon ml-2" />
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

const iconStyle = {
    width: '20px',
    height: '20px',
    marginBottom: '5px', 
};

export default Footer;
