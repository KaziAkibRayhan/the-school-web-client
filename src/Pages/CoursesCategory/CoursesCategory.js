import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CoursesCardSummery from '../Courses/CoursesCardSummery/CoursesCardSummery';

const CoursesCategory = () => {
    const allCourses = useLoaderData()
    return (
        <Container>
            <Row>
                {
                    allCourses.map(course => <CoursesCardSummery key={course.id} course={course}></CoursesCardSummery>)
                }
            </Row>
        </Container>
    );
};

export default CoursesCategory;