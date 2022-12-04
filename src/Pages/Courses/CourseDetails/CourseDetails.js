import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';


const CourseDetails = () => {
    const course = useLoaderData()
    const { rating, img, details, course_name, course_fee, course_duration, } = course;
    return (
        <Card className="w-50 mx-auto mt-5">
            <Card.Header>
                <Card.Title className='fw-bold'>Course Name: <span className='text-primary'>{course_name}</span>.</Card.Title>
            </Card.Header>
            <Card.Body>
                <Image src={img} style={{ width: '100%' }}></Image>
                <Card.Text className='text-muted'>
                    <h5 className='text-dark'>Course Description:</h5>
                    {details}.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <p className='text-warning'><FaStar /></p>
                    <p className='ms-2'>{rating}</p>
                </div>
                <div>
                    <p className='fw-bold'>Course Fee: <span className='text-primary'>{course_fee} /- BDT.</span></p>
                </div>
                <div>
                    <p className='fw-bold'>Course Duration: <span className='text-primary'>{course_duration}.</span></p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default CourseDetails;