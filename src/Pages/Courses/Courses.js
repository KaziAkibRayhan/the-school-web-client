import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineArrowDown } from "react-icons/ai";

const Courses = () => {
    const [categoryCourses, setCategoryCourses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/courses-category')
            .then(res => res.json())
            .then(data => setCategoryCourses(data))
    }, [])
    return (
        <Container>
            <Row>
                <Col lg='9'>Content Detalis Side</Col>
                <Col lg='3'>
                    <h5 className='text-primary'>Our Courses Category <AiOutlineArrowDown /></h5>
                    <div>
                        {
                            categoryCourses.map(category => <p key={category.id}>
                                <Link to={`/courses-category/${category.id}`}>
                                    {category.name}</Link></p>)
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;