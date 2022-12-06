import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <div className='p-5'>
            <Container>
            <Row className='justify-content-center'>
                <Col lg='6' sm='8'>
                    <div className='text-center'>
                        <h3><span>Frequently </span> Asked Questions</h3>
                        <p>Learn valuable, practical skills from the courses. Explore tech essentials and keep pace with change. Become more focused and productive. Top it off with courses that round out your skills and enrich your day to day.</p>
                    </div>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col lg='8' sm='10'>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>About our courses</Accordion.Header>
                            <Accordion.Body>
                            Every course we have is professional, we take every course from small to big with care, so that everyone can benefit from doing his desired course.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Every course is life time access given?</Accordion.Header>
                            <Accordion.Body>
                                Yes. Our course  is open life time access but some course are not life time access.
                                Because when the course is life time, student could not completed their course, So we some off life time access.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>How many people have succeeded in your course?</Accordion.Header>
                            <Accordion.Body>
                                There many people completed our professional course and successfull their life.
                                The quantity of success student 5000 more people.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <div className='text-center d-flex align-items-center justify-content-center mt-4'>
                        <p class="mb-0 px-2">Can't find your answers?</p>
                        <Link to={'/'}>Contact Us</Link>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default FAQ;