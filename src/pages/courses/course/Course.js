import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ course }) => {
    const { image_url, title, details, total_view, rating, _id } = course;
    return (
        <Col md={6} xl={4} className='m-3'>
            <Card className="card-container" style={{ width: '23rem' }}>
                <div className="card-position">
                    <Card.Img className='card-img' variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {
                                details.length > 207 ?
                                    <p>{details.slice(0, 207) + '...'}<Link to={`/course/${_id}`}>Details</Link></p>
                                    :
                                    <p>{details}</p>
                            }
                        </Card.Text>
                        <Button variant="outline-info">Buy Now</Button>
                    </Card.Body>
                </div>
                <Card.Footer className="text-muted d-flex justify-content-between">
                    <p>Enrolled students: {total_view}</p>
                    <span>Rating: {rating.number}</span>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Course;