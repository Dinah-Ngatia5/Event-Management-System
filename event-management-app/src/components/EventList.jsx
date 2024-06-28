import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../css/index.css';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        time: '',
        location: '',
        price: '',
        image: ''
    });

    const query = useQuery();
    const searchTerm = query.get('search') || '';

    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const response = await fetch('https://events-management-backend-4q19.onrender.com/events');
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                setEvents(data.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching events: ' + err.message);
                setLoading(false);
            }
        };

        fetchEventsData();
    }, []);

    const filteredEvents = events.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://events-management-backend-4q19.onrender.com/event', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to add event');
            }

            const newEvent = await response.json();
            setEvents([...events, newEvent.data]);

            // Clear form data and hide the form
            setFormData({
                name: '',
                description: '',
                date: '',
                time: '',
                location: '',
                price: '',
                image: ''
            });
            setShowForm(false);
        } catch (err) {
            setError('Error adding event: ' + err.message);
        }
    };

    const toggleForm = () => {
        setShowForm(!showForm);
    };

    const handleDelete = async (eventId) => {
        try {
            const response = await fetch(`https://events-management-backend-4q19.onrender.com/events/${eventId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to delete event');
            }

            // Remove the deleted event from the state
            setEvents(events.filter(event => event.id !== eventId));
        } catch (err) {
            setError('Error deleting event: ' + err.message);
        }
    };

    const renderContent = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
                <h1>Events List Available</h1>

                <Button className="mt-4" onClick={toggleForm}>
                    {showForm ? 'Hide Add Event Form' : 'Show Add Event Form'}
                </Button>

                {showForm && (
                    <Form onSubmit={handleSubmit} className="signup-form mt-4">
                        <h3>Add Event</h3>
                        <Form.Group controlId="eventName">
                            <Form.Label>Event Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="eventDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="eventDate">
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="eventTime">
                            <Form.Label>Time</Form.Label>
                            <Form.Control
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="eventLocation">
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={formData.location}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="eventPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                name="price"
                                placeholder="Price"
                                value={formData.price}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="eventImage">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                placeholder="Enter image URL"
                                value={formData.image}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Button variant="secondary" type="submit" className="signup-button">
                            Add Event
                        </Button>
                    </Form>
                )}

                <Row className="mt-4">
                    {filteredEvents.map((event) => (
                        <Col key={event.id} md={4} className="mb-4">
                            <div className="card-link">
                                <Card className="h-100 shadow-sm card-event">
                                    <div className="card-img-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={event.image}
                                            className="card-img"
                                            loading="lazy" // Lazy load images
                                        />
                                    </div>
                                    <Card.Body className="card-body">
                                        <Card.Title className="card-title">{event.name}</Card.Title>
                                        <Card.Text className="card-text">{event.description}</Card.Text>
                                        <div className="card-details">
                                            <div>
                                                <strong>Date: </strong>{event.date}
                                            </div>
                                            <div>
                                                <strong>Time: </strong>{event.time}
                                            </div>
                                            <div>
                                                <strong>Location: </strong>{event.location}
                                            </div>
                                            <div>
                                                <strong>Price: </strong>{event.price}
                                            </div>
                                        </div>
                                        <Button
                                            variant="danger"
                                            onClick={() => handleDelete(event.id)}
                                            className="mt-2 mr-2"
                                        >
                                            Delete
                                        </Button>
                                        <Link to={`/event-details/${event.id}`}>
                                            <Button
                                                variant="primary"
                                                className="mt-2"
                                            >
                                                Book
                                            </Button>
                                        </Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        );
    };

    return (
        <Container>
            {renderContent()}
        </Container>
    );
};

export default EventList;
