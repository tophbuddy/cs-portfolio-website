import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Container className="p-3">
            <Row>
                <Col>
                    <Card className="p-3 mb-3">
                        <h1>Christopher Holzheu</h1>
                        <h3>MS New Grad Full Stack Developer</h3>
                        <p>
                            I build comprehensive and efficient full stack applications and
                            am always learning and incorporating new technologies. 
                        </p>
                    </Card>

                    <Card className="p-3 mb-3">
                        <Link to="/about">
                            <Button variant="link">About</Button>
                        </Link>
                        <Link to="/projects">
                            <Button variant="link">Projects</Button>
                        </Link>
                    </Card>
                    
                    <Card className="p-3 mb-3">
                        <Button variant="primary" href="https://www.linkedin.com/in/christopher-holzheu/">
                            LinkedIn
                        </Button>
                        <Button variant="primary" href="https://github.com/tophbuddy">
                            GitHub
                        </Button>
                    </Card>
                </Col>

                <Col>
                    <Card className="p-3 mb-3">
                        <h2>Introduction</h2>
                        <p>
                            Placeholder text for Introduction
                        </p>
                    </Card>

                    <Card className="p-3 mb-3">
                        <Link to="/resume.pdf" target="_blank">
                            <Button variant="link">Resume</Button>
                        </Link>
                        <Link to="/projectArchive">
                            <Button variant="link">Project Archive</Button>
                        </Link>
                        <p>
                            Tech Stack: React, Node.js, Express, MongoDB
                        </p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;