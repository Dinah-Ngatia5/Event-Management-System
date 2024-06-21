import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Dashboard.css';

const Dashboard = () => {
    return (
        <Container fluid className="dashboard-container">

            <Row>
                <Col>
                    <h3>Event Galleries</h3>
                </Col>
            </Row>
            <Row className="gallery-row">
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1694631508527-4PUIZLL2XFMJP3JHY31X/SC230610-0212.jpg?format=1500w" />
                        <Card.Body>
                            <Card.Title>Wedding Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
                                neque, ut fringilla elit tempus id.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BvcnRzfGVufDB8fDB8fHww" />
                        <Card.Body>
                            <Card.Title>Sport Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
                                neque, ut fringilla elit tempus id.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXZlbnQlMjBtdXNpYyUyMGZlc3RpdmFsfGVufDB8fDB8fHww" />
                        <Card.Body>
                            <Card.Title>Music Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
                                neque, ut fringilla elit tempus id.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1664384640013-29d36b4bf4ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2VueWElMjBtdXNldW18ZW58MHx8MHx8fDA%3D" />
                        <Card.Body>
                            <Card.Title>Art Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
                                neque, ut fringilla elit tempus id.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1605289355680-75fb41239154?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMGV2ZW50fGVufDB8fDB8fHww" />
                        <Card.Body>
                            <Card.Title>Fashion Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
                                neque, ut fringilla elit tempus id.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1604329756574-bda1f2cada6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGN1aXNpbmV8ZW58MHx8MHx8fDA%3D" />
                        <Card.Body>
                            <Card.Title>Food Events</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius maximus
                                neque, ut fringilla elit tempus id.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
