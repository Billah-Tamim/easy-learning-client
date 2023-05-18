import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Catagory from '../catagory/Catagory';
import { useLoaderData } from 'react-router-dom';
import Course from '../course/Course';


const Courses = () => {
    const allCourses = useLoaderData();
    return (
        <Container className='mt-5'>
            <Row className='justify-content-center'>
                <Col md={3}>
                    <Catagory></Catagory>
                </Col>
                <Col md={7}>
                    <Row className='justify-content-between mx-auto'>
                        {
                            allCourses.map(course => <Course
                                key={course._id}
                                course={course}
                            ></Course>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;