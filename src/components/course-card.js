import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {Col} from "react-bootstrap";

const CourseCard = (
    {
        deleteCourse,
        updateCourse,
        course,
        title,
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(true)
    }

    const onLeave = () => {
        setHover(false)
    }

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <div className="card mt-4"
                 onMouseEnter={onHover} onMouseLeave={onLeave}>
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top"
                     alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's
                        content.</p>
                    <img src={``}/>
                    <Link to={"/courses/editor"} className="btn btn-primary">{title}</Link>
                    {hover ? <FontAwesomeIcon icon={"edit"} size={"lg"} pull={"right"} className={"mt-3"}
                                              onClick={() => deleteCourse(course)}/> : null}
                </div>
            </div>
        </Col>
    )
}

export default CourseCard