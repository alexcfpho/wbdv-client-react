import React from 'react'
import CourseCard from "./course-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

const CourseGrid = ({courses, deleteCourse}) =>
    <div>
    <Link to={"/courses/table"}>
        <FontAwesomeIcon icon={"list"} size={"2x"} pull={"right"}/>
    </Link>
        <h2>Course Grid</h2>
        {/*@TODO Make responsive*/}
        <div className="row">
            {
                courses.map((course, index) =>
                    <CourseCard
                        deleteCourse={deleteCourse}
                        key={index}
                        course={course}
                        title={course.title}
                        owner={course.owner}
                        lastModified={course.lastModified}
                    />
                )
            }
        </div>
    </div>

export default CourseGrid