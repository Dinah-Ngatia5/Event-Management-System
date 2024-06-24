// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import '../css/Dashboard.css';

// const Dashboard = () => {
//     return (
//         <Container fluid className="dashboard-container">

//             <Row>
//                 <Col>
//                     <h3>Event Galleries</h3>
//                 </Col>
//             </Row>
//             <Row className="gallery-row">
//                 <Col md={4} className="mb-4">
//                     <Card>
//                         <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1694631508527-4PUIZLL2XFMJP3JHY31X/SC230610-0212.jpg?format=1500w" />
//                         <Card.Body>
//                             <Card.Title>Wedding Events</Card.Title>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
//                                 neque, ut fringilla elit tempus id.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4} className="mb-4">
//                     <Card>
//                         <Card.Img variant="top" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww" />
//                         <Card.Body>
//                             <Card.Title>Sport Events</Card.Title>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
//                                 neque, ut fringilla elit tempus id.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4} className="mb-4">
//                     <Card>
//                         <Card.Img variant="top" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDB8fDB8fHww" />
//                         <Card.Body>
//                             <Card.Title>Music Events</Card.Title>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
//                                 neque, ut fringilla elit tempus id.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4} className="mb-4">
//                     <Card>
//                         <Card.Img variant="top" src="https://images.unsplash.com/photo-1664384640013-29d36b4bf4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VueWElMjBtdXNldW18ZW58MHx8MHx8fDA%3D" />
//                         <Card.Body>
//                             <Card.Title>Art Events</Card.Title>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
//                                 neque, ut fringilla elit tempus id.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4} className="mb-4">
//                     <Card>
//                         <Card.Img variant="top" src="https://images.unsplash.com/photo-1605289355680-75fb41239154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGV2ZW50fGVufDB8fDB8fHww" />
//                         <Card.Body>
//                             <Card.Title>Fashion Events</Card.Title>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
//                                 neque, ut fringilla elit tempus id.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//                 <Col md={4} className="mb-4">
//                     <Card>
//                         <Card.Img variant="top" src="https://images.unsplash.com/photo-1604329756574-bda1f2cada6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D" />
//                         <Card.Body>
//                             <Card.Title>Food Events</Card.Title>
//                             <Card.Text>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
//                                 neque, ut fringilla elit tempus id.
//                             </Card.Text>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Dashboard;

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
    );
};

export default Dashboard;

