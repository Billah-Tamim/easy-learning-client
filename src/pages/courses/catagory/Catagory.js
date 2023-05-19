import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Catagory = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://easy-learning-server-ten.vercel.app/catagories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);


    return (
        <div>
            <h4>Type of Courses</h4>
            {
                courses.map(course => <li className='mb-3' key={course.id}>
                    <Link to={`/courses/${course.id}`}>{course.name}</Link>
                </li>)
            }
        </div>
    );
};

export default Catagory;