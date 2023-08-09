import React from "react";
import '../css/AboutPage.css'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const AboutPage = () => {
    return (
        <Container className="p-3">
            <Row>
                <Col md={6}>
                    <Card className="p-3 mb-3">
                        <h1>About Me</h1>
                        <p>
                            A half year into the lockdown in 2020 and all my plans 
                            to go into a career in data analysis thrown into disarray, 
                            I had to decide what I wanted to do for the future despite 
                            having very limited opportunities. I was convinced to look 
                            into Northeastern University’s Master of Science in Computer 
                            Align program, one that didn’t require prior experience in 
                            the subject and started with intensive courses aimed at 
                            teaching the basics and foundations that one would learn 
                            in a bachelor’s in science degree. Now, having finished 
                            that degree with a high GPA and an internship with SAP 
                            under my belt, I am now in the next phase of finding my 
                            first full-time job as a software engineer, using this 
                            website as a way to showcase my skills and experience 
                            to potential employers.
                            <br/>
                            I haven’t been sitting idly by, waiting for an employer 
                            to give me a chance. Every day I exercise my problem-solving 
                            skills on LeetCode, with over 200 and counting finished so far.  
                            Additionally, I work on several self-started projects utilizing 
                            various programming language and technologies, both ones 
                            I’ve used to brush up on my knowledge and new ones to 
                            bolster my skill set.
                        </p>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="p-3 mb-3">
                        <h2>My Background</h2>
                        <p>
                            Background Placeholder
                        </p>
                    </Card>
                    <Card className="p-3 mb-3">
                        <h2>Connect with me</h2>
                        <Button variant="primary" href="https://www.linkedin.com/in/christopher-holzheu/">
                            LinkedIn
                        </Button>
                        <Button variant="primary" href="https://github.com/tophbuddy">
                            GitHub
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;