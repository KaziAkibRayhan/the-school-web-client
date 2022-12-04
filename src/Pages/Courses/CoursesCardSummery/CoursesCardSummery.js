import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CoursesCardSummery = ({ course }) => {
    const { id, course_name, img, course_fee, details } = course;
    console.log(course);
    return (
        <Col lg='6' className='mb-5 mx-auto'>
            <Card style={{ width: '23rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{course_name}</Card.Title>
                    <Card.Text>
                        {details?.slice(0, 60) + '...'}
                    </Card.Text>
                    <Card.Text>
                        Course Cost: {course_fee} BDT.
                    </Card.Text>
                    <Link to={`/courses/${id}`}>
                        <Button variant="primary">
                            Course Details
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CoursesCardSummery;