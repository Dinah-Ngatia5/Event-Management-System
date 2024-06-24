
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import '../css/index.css';

const EventDetails = () => {
    const { id } = useParams(); // Retrieve the event ID from the URL
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [book, setBook] = useState(false);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/events/${id}`);
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
        const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage

        if (!userId) {
            alert('User not logged in');
            return;
        }

        const attendanceData = {
            eventid: id,
            userid: userId,
            attendance: 'Attending'
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/attendances', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(attendanceData)
            });
            console.log(response)
            if (!response.ok) {
                throw new Error('Failed to book event');
            }

            const result = await response.json();
            alert(result.message); // Show success message
            setBook(true); // Update the booking status
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/index.css';

const EventDetails = () => {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [attending, setAttending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRandomEvent = async () => {
            try {
                const response = await fetch('/events.json'); // Replace with your actual API endpoint

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const eventData = await response.json();
                console.log('Fetched event data:', eventData);

                // For demonstration, assuming the API returns an array of events
                const randomEvent = eventData[Math.floor(Math.random() * eventData.length)];

                if (!randomEvent) {
                    throw new Error('Random event not found');
                }

                setEvent(randomEvent);
            } catch (error) {
                setError(error.message);
                console.error('Error fetching event data:', error);
            }
        };

        fetchRandomEvent();
    }, [id]);

    const toggleAttending = () => {
        setAttending(!attending);
    };


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

        return <div>Loading...</div>;
    }

    return (
        <div className="event-details-container">
            <div className="event-card">
                <div className="event-card-header">
                    <h2>{event.name}</h2>
                    <button className="attend-button" onClick={toggleAttending}>
                        {attending ? 'Attending' : <i className='bx bx-plus-circle bx-md'></i>}
                    </button>
                    {attending && <span className="attending-status">You are attending this event</span>}
                    {!attending && <span className="attending-status">You are not attending this event</span>}
                </div>
                <div className="event-card-body">
                    <div className="event-card-img">
                        <img src={event.image} alt={event.name} width="350" height="300" />
                    </div>
                    <div className="event-card-info">
                        <p><span>Date: </span>{new Date(event.date).toLocaleDateString()}</p>
                        <p><span>Time: </span>{event.time}</p>
                        <p><span>Location: </span>{`${event.city}, ${event.country}`}</p>
                        <p><span>Price: </span>${event.price}</p>
                        <p>{event.description}</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EventDetails;
