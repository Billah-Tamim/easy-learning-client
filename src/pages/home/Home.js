import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

const Home = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 car-img"
                    src={'https://tse2.mm.bing.net/th?id=OIP.Ieo2Erk5_FGs56HoZbZg2gHaDS&pid=Api&P=0&h=180'}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Learn Latest Technology</h3>
                    <p>There are some AI courses that is very popular now days</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 car-img"
                    src={'https://tse2.mm.bing.net/th?id=OIP.0Vnyslv0gqZjty76s6dpqAHaCx&pid=Api&P=0&h=520'}
                    alt="Second slide"
                />

                <Carousel.Caption className='text-dark'>
                    <h3>Now days trend courses</h3>
                    <p>Marketing is one of the best study sector. Also is world need a lots of digital marketing employ.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 car-img"
                    src={'https://tse1.mm.bing.net/th?id=OIP.-T12PgBozYqVmiQYQ36heQHaE8&pid=Api&P=0&h=220'}
                    alt="Third slide"
                />

                <Carousel.Caption className='text-warning'>
                    <h3>Success With Us</h3>
                    <p>
                        Language course and some other skill development course can change your life.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Home;