import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {Col} from "react-bootstrap";
import {faCheck} from "@fortawesome/free-solid-svg-icons";

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
        setNewTitle("")
    }
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <div className="card mt-4"
                 onMouseEnter={onHover} onMouseLeave={onLeave}>
                <img src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
                     className="card-img-top"
                     alt="..."/>
                <div className="card-body">
                    {editing && <FontAwesomeIcon icon={"trash"} size={"lg"} pull={"right"}
                                                 onClick={() => {
                                                     deleteCourse(course);
                                                     setEditing(false);
                                                 }}/>
                    }
                    {editing && <FontAwesomeIcon icon={faCheck} size={"lg"} pull={"right"} className="mr-1"
                                                 onClick={() => saveTitle()}/>}

                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                        the
                        card's
                        content.</p>
                    <img src={``}/>

                    {
                        !editing &&
                        <Link to={`/courses/grid/edit/${course._id}`} className="btn btn-primary">{title}</Link>
                    }
                    {
                        editing &&
                        <input
                            onChange={(event) => setNewTitle(event.target.value)}
                            value={newTitle}
                            className="form-control"/>
                    }
                    {hover && !editing ?
                        <FontAwesomeIcon icon={"edit"} size={"lg"} pull={"right"} color="purple" className={"mt-3"}
                                         onClick={() => setEditing(true)}/> : null}

                </div>
            </div>
        </Col>
    )
}

export default CourseCard