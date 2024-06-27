import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../css/index.css';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [book, setBook] = useState(false);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`https://events-management-backend-4q19.onrender.com/events/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch event');
                }
                const data = await response.json();
                setEvent(data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching event: ' + err.message);
                setLoading(false);
            }
        };

        fetchEventData();
    }, [id]);

    const handleBookNow = async () => {
        const userId = localStorage.getItem('userId');

        if (!userId) {
            alert('User not logged in');
            return;
        }

        const attendanceData = {
            eventid: id,
            userid: userId,
            attendance: 'Attending'
        };

        console.log('Attendance Data:', attendanceData); // Log attendance data before sending

        try {
            const response = await fetch('https://events-management-backend-4q19.onrender.com/attendances', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(attendanceData)
            });

            console.log('Response:', response); // Log response from server

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error Data:', errorData); // Log error data
                throw new Error('Failed to book event');
            }

            const result = await response.json();
            alert(result.message); // Alert success message
            setBook(true); // Update state to indicate booking success

        } catch (err) {
            console.error('Error:', err);
            alert('Error booking event: ' + err.message);
        }
    };

    useEffect(() => {
        // Check if userId is already stored in localStorage
        const userId = localStorage.getItem('userId');
        if (!userId) {
            // Simulate a sign-up or login process (you'll replace this with your actual logic)
            const simulatedUserId = 'your_generated_user_id'; // Replace with actual generated userId after signup/login
            localStorage.setItem('userId', simulatedUserId);
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!event) {
        return <div>No event found</div>;
    }

    return (
        <Container className="event-details">
            <Row>
                <Col md={8} className="mb-4">
                    <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src={event.image} className="card-img" />
                        <Card.Body>
                            <Card.Title>{event.name}</Card.Title>
                            <Card.Text>{event.description}</Card.Text>
                            <div className="card-details">
                                <div>
                                    <i className="fas fa-calendar-alt"></i>{' '}
                                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                                </div>
                                <div>
                                    <i className="fas fa-clock"></i>{' '}
                                    <strong>Time:</strong> {event.time}
                                </div>
                                <div>
                                    <i className="fas fa-map-marker-alt"></i>{' '}
                                    <strong>Location:</strong> {event.location}
                                </div>
                                <div>
                                    <i className="fas fa-dollar-sign"></i>{' '}
                                    <strong>Price:</strong> ${event.price}
                                </div>
                            </div>
                            <Button
                                variant="secondary"
                                style={{ backgroundColor: '#4299f7' }}
                                onClick={handleBookNow}
                                disabled={book}
                            >
                                {book ? "Attending" : "Book Now"}
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EventDetails;
