
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
