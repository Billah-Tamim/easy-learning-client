import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import './Details.css';

const Details = () => {
    const course = useLoaderData();
    return (
        <Card className="w-75 mx-auto mt-5">
            <Card.Header>
                <span className='text-success me-3 fs-5 fw-bold'>Tutor: {course.tutor.name}</span>
                <Image className='tutor-img' src={course?.tutor?.img} roundedCircle />
            </Card.Header>
            <Card.Img className='details-img' variant="top" src={course.image_url} />
            <Card.Body className='text-center '>
                <Card.Title className='text-success'>{course.title}</Card.Title>
                <Card.Text>
                    {course.details}
                </Card.Text>
                <Button variant="success">Buy Now</Button>
            </Card.Body>
            <Card.Footer className="text-success d-flex justify-content-between">
                <div>
                    <span className='me-2'>Learn {course.title} within 30 days</span>
                    <Button variant="outline-success">Get Premium</Button>
                </div>
                <Link to={`/courses/${course.category_id}`}>Relevant Courses</Link>
            </Card.Footer>
        </Card>
    );
};

export default Details;