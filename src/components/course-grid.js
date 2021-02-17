import React from 'react'
import CourseCard from "./course-card";

// Implementing this functionally so we pass parameters in paren, to "destruct".
const CourseGrid = ({courses}) =>
    <div>
        <h2>Course Grid {courses.length}</h2>
        <div className="row">
            {
                courses.map(course =>
                <CourseCard course={course}/>
                )
            }
        </div>
    </div>


export default CourseGrid