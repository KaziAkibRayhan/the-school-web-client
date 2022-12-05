import React, { useEffect, useState } from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowDown } from "react-icons/ai";
import CoursesCardSummery from '../CoursesCardSummery/CoursesCardSummery';

const Courses = () => {
    const [categoryCourses, setCategoryCourses] = useState([])
    const allCourses = useLoaderData()

    useEffect(() => {
        fetch('http://localhost:5000/courses-category')
            .then(res => res.json())
            .then(data => setCategoryCourses(data))
    }, [])
    return (
        <Container className="mt-5">
            <Row>
                <Col lg='3' md='6'>
                    <h5 className='text-primary'>Our Courses Category <AiOutlineArrowDown /></h5>
                    <div className='shadow p-3 rounded'>
                        {
                            categoryCourses.map(category => <ListGroup key={category.id}>
                                <ListGroup.Item action variant="light" className='mb-3'>
                                    <Link className='nav-link text-dark' to={`/courses-category/${category.id}`}>
                                        {category.name}</Link>
                                </ListGroup.Item>
                            </ListGroup>
                            )}
                    </div>
                </Col>
                <Col lg='9' sm='12' className='mt-3'>
                    <Row>
                        {
                            allCourses.map(course => <CoursesCardSummery key={course.id} course={course}></CoursesCardSummery>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;