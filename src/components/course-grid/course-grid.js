import React from 'react'
import CourseCard from "./course-card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom"
import {Row} from "react-bootstrap";

import './course-grid.css'

const CourseGrid = ({courses, deleteCourse, updateCourse}) =>
    <div className="my-2">
        <div className="text-right">
            <FontAwesomeIcon icon={"folder"} order={1} size={"lg"} className="mr-3"/>
            <FontAwesomeIcon icon={"sort-alpha-up"} order={2} size={"lg"} className="mr-3"/>
            <Link to={"/courses/table"}>
                <FontAwesomeIcon icon={"list"} order={3} size={"lg"} className="mr-1"/>
            </Link>
        </div>
        <Row>
            {
                courses.map((course, index) =>
                    <CourseCard
                        deleteCourse={deleteCourse}
                        updateCourse={updateCourse}
                        key={index}
                        course={course}
                        title={course.title}
                        owner={course.owner}
                        lastModified={course.lastModified}
                    />
                )
            }
        </Row>
        <Row>
            <FontAwesomeIcon icon={"plus-circle"} color={"red"} size={"4x"} className="my-plus-stuck-at-bottom-right"/>
        </Row>
    </div>

export default CourseGrid