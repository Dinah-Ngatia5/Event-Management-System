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
