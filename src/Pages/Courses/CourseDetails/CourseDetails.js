import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaFileDownload, FaStar } from 'react-icons/fa';
import Pdf from "react-to-pdf";


const CourseDetails = () => {
    const ref = React.createRef();
    const course = useLoaderData()
    const { id, rating, img, details, course_name, course_fee, course_duration, } = course;
    return (
        <Container>
            <Row>
                <Col md='9' sm='12'>

                    <div className='d-flex justify-content-center mt-2'>
                        <Pdf targetRef={ref} filename="course-details.pdf">
                            {({ toPdf }) => <button className='btn btn-primary' onClick={toPdf}>Download Course details PDF <FaFileDownload className='text-light fs-3' /></button>}
                        </Pdf>
                    </div>
                    <Card ref={ref} className="text-center mx-auto my-2">
                        <Card.Header>
                            <Card.Title className='fw-bold'>Course Name: <span className='text-primary'>{course_name}</span>.</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Image src={img} style={{ width: '50%' }}></Image>
                            <Card.Text className='text-muted'>
                                <span className='text-dark fw-bold fs-5 me-2'>Course Description:</span>
                                {details}.
                            </Card.Text>
                            <Link to={`/courses/purchase/${id}`}>
                                <Button variant="primary">Purchase The Course</Button>
                            </Link>
                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between align-items-center">
                            <div className='d-flex flex:md-col align-items-center'>
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
                </Col>
            </Row>
        </Container>
    );
};

export default CourseDetails;