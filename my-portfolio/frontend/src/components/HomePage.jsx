import React from 'react';
import { Jumbotron, Button, Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={4}>
                    <Jumbotron>
                        <h1>Christopher Holzheu</h1>
                        <h2>MS New Grad Full Stack Developer</h2>
                        <p>
                            I build comprehensive and efficient full stack applications and
                            am always learning and incorporating new technologies. 
                        </p>
                        <ButtonGroup vertical>
                            <Link to="/about">
                                <Button variant="link">About</Button>
                            </Link>
                            <Link to="/projects">
                                <Button variant="link">Projects</Button>
                            </Link>
                        </ButtonGroup>
                        <p>
                            <a href="https://www.linkedin.com/in/christopher-holzheu/">LinkedIn</a>
                            <a href="https://www.linkedin.com/in/christopher-holzheu/">GitHub</a>
                        </p>
                    </Jumbotron>
                </Col>
                <Col sm={8}>
                    <Jumbotron>
                        <h1>Introduction</h1>
                        <p>
                            Placeholder text for Introduction
                        </p>
                        <Link to="/resume.pdf" target="_blank">
                            <Button variant="link">Resume</Button>
                        </Link>
                        <Link to="/projectArchive">
                            <Button variant="link">Project Archive</Button>
                        </Link>
                        <p>
                            Tech Stack: React, Node.js, Express, MongoDB
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;