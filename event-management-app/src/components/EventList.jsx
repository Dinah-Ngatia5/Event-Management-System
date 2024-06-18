import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/index.css'; 

const EventList = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [randomEvents, setRandomEvents] = useState([]);

    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const response = await fetch('events.json'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const eventsData = await response.json();

                const shuffledEvents = shuffleArray(eventsData);
                const randomEvents = shuffledEvents.slice(0, 12);

                setRandomEvents(randomEvents);
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

    const filteredEvents = randomEvents.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="find-events-bg">
            <Container>
                <div className="landImage">
                    <div className="input-group d-flex justify-content-center">
                        <FormControl
                            type="text"
                            placeholder="Search for events..."
                            className="form-control w-50"
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

                <h3 className="mt-4">All Events</h3>

                <Row className="mt-4">
                    {filteredEvents.map((event) => (
                        <Col key={event.id} md={4} className="mb-4">
                            <Link to={`/registration/${event.id}`} className="card-link">
                                <Card className="h-100 shadow-sm">
                                    <Card.Img
                                        variant="top"
                                        src={event.image}
                                        style={{ objectFit: 'cover', height: '200px' }}
                                    />
                                    <Card.Body>
                                        <Card.Title>{event.name}</Card.Title>
                                        <Card.Text>{event.description}</Card.Text>
                                        <Card.Text>
                                            <i className="fas fa-calendar-alt"></i>{' '}
                                            <strong>Date:</strong>{' '}
                                            {new Date(event.date).toLocaleDateString()}
                                        </Card.Text>
                                        <Card.Text>
                                            <i className="fas fa-clock"></i>{' '}
                                            <strong>Time:</strong> {event.time}
                                        </Card.Text>
                                        <Card.Text>
                                            <i className="fas fa-map-marker-alt"></i>{' '}
                                            <strong>Location:</strong> {event.city}, {event.country}
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default EventList;
