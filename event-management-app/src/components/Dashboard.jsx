

import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/index.css';
import LogoutButton from './LogoutButton';


const Dashboard = () => {
    const [attendances, setAttendances] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAttendanceData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/attendances');
                if (!response.ok) {
                    throw new Error('Failed to fetch attendances');
                }
                const data = await response.json();
                setAttendances(data.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching attendances: ' + err.message);
                setLoading(false);
            }
        };

        fetchAttendanceData();
    }, []);

    const renderContent = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
                <LogoutButton/>
                <h1>Attending Events</h1>

                <Row className="mt-4">
                    {attendances.map((attendance) => (
                        <Col key={attendance.event.id} md={4} className="mb-4">
                            <Link to={`/event-details/${attendance.event.id}`} className="card-link">
                                <Card className="h-100 shadow-sm card-event">
                                    <div className="card-img-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={attendance.event.image}
                                            className="card-img"
                                        />
                                    </div>
                                    <Card.Body className="card-body">
                                        <Card.Title className="card-title">{attendance.event.name}</Card.Title>
                                        <Card.Text className="card-text">{attendance.event.description}</Card.Text>
                                        <div className="card-details">
                                            <div>
                                                <i className="fas fa-calendar-alt"></i>{' '}
                                                <strong>Date:</strong>{' '}
                                                {new Date(attendance.event.date).toLocaleDateString()}
                                            </div>
                                            <div>
                                                <i className="fas fa-clock"></i>{' '}
                                                <strong>Time:</strong> {attendance.event.time}
                                            </div>
                                            <div>
                                                <i className="fas fa-map-marker-alt"></i>{' '}
                                                <strong>Location:</strong> {attendance.event.location}
                                            </div>
                                            <div>
                                                <i className="fas fa-dollar-sign"></i>{' '}
                                                <strong>Price:</strong> ${attendance.event.price}
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    };

    return (
        <div className="find-events-bg">
            <Container>
                {renderContent()}
            </Container>
        </div>

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Dashboard.css';

const Dashboard = () => {
    return (
        <Container fluid className="dashboard-container">
            <Row className="dashboard-cards">
                <Col md={3} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Daily Views</Card.Title>
                            <Card.Text>1234</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Likes</Card.Title>
                            <Card.Text>5678</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Comments</Card.Title>
                            <Card.Text>91011</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} className="mb-4">
                    <Card>
                        <Card.Body>
                            <Card.Title>Shares</Card.Title>
                            <Card.Text>1213</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className="recent-articles">
                    <h3>Recent Articles</h3>
                    <div className="articles-container">
                        {/* Add your recent articles here */}
                        <div className="article">Article 1</div>
                        <div className="article">Article 2</div>
                        <div className="article">Article 3</div>
                        {/* Add more articles as needed */}
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Dashboard;

