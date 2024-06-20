import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, FormControl, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/index.css';

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [displayedEvents, setDisplayedEvents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        date: '',
        time: '',
        city: '',
        country: '',
        image: ''
    });

    useEffect(() => {
        // Load events from localStorage on component mount
        const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
        setEvents(storedEvents);

        const fetchEventsData = async () => {
            try {
                const response = await fetch('events.json'); // Adjust path as per your file structure
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const eventsData = await response.json();

                const shuffledEvents = shuffleArray(eventsData);
                const initialEvents = shuffledEvents.slice(0, 12);

                setDisplayedEvents(initialEvents);
                setLoading(false);
            } catch (err) {
                setError('Error fetching events: ' + err.message);
                setLoading(false);
            }
        };

        fetchEventsData();
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredEvents = displayedEvents.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            ...formData,
            id: events.length + 1 // Generate a unique ID for the new event
        };

        const updatedEvents = [...events, newEvent];
        setEvents(updatedEvents);

        // Store updated events in localStorage
        localStorage.setItem('events', JSON.stringify(updatedEvents));

        // Update displayedEvents state to include the newly added event
        const updatedDisplayedEvents = [...displayedEvents, newEvent];
        setDisplayedEvents(updatedDisplayedEvents);

        // Clear form data and hide the form
        setFormData({
            name: '',
            description: '',
            date: '',
            time: '',
            city: '',
            country: '',
            image: ''
        });
        setShowForm(false);
    };


    const toggleForm = () => {
        setShowForm(!showForm);
    };

    // Function to render the form and event cards after loading
    const renderContent = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div>
                <div className="landImage">
                    <div className="input-group-container">
                        <div className="input-group .custom-search-input-group">
                            <FormControl
                                type="text"
                                placeholder="Search for events..."
                                className="form-control"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <div className="input-group-append">
                                <Button variant="secondary" type="button">
                                    <i className="fa fa-search"></i>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="mt-4">All Events</h3>

                <Button className="mt-4" onClick={toggleForm}>
                    {showForm ? 'Hide Add Event Form' : 'Show Add Event Form'}
                </Button>

                {showForm && (
                    <Form onSubmit={handleSubmit}>
                        <h3 className="mt-4">Add Event</h3>
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
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                            <Form.Control
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
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
                        <Button variant="primary" type="submit">
                            Add Event
                        </Button>
                    </Form>
                )}

                <Row className="mt-4">
                    {filteredEvents.map((event) => (
                        <Col key={event.id} md={4} className="mb-4">
                            <Link to={`/event-details/${event.id}`} className="card-link">
                                <Card className="h-100 shadow-sm card-event">
                                    <div className="card-img-wrapper">
                                        <Card.Img
                                            variant="top"
                                            src={event.image}
                                            className="card-img"
                                        />
                                    </div>
                                    <Card.Body className="card-body">
                                        <Card.Title className="card-title">{event.name}</Card.Title>
                                        <Card.Text className="card-text">{event.description}</Card.Text>
                                        <div className="card-details">
                                            <div>
                                                <i className="fas fa-calendar-alt"></i>{' '}
                                                <strong>Date:</strong>{' '}
                                                {new Date(event.date).toLocaleDateString()}
                                            </div>
                                            <div>
                                                <i className="fas fa-clock"></i>{' '}
                                                <strong>Time:</strong> {event.time}
                                            </div>
                                            <div>
                                                <i className="fas fa-map-marker-alt"></i>{' '}
                                                <strong>Location:</strong> {event.city}, {event.country}
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
    );
};

export default EventList;
