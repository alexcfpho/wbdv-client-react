import React, {useState} from "react";
import {Col, Form, FormControl, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';

const CourseTopBar = (
    {createCourse}) => {

    const [newTitle, setNewTitle] = useState('')
    const newCourse = () => {
        const aCourse = {
            title: newTitle,
            owner: 'defaultNewOwner',
            lastModified: new Date().toLocaleDateString()
        }
        createCourse(aCourse)
        setNewTitle("")
    }
    return (
        <div className="mt-2 no-gutters">
            <Row>
                <Col xs={1}>
                    <FontAwesomeIcon className="mt-2" icon={"bars"} size={"lg"}/>
                </Col>
                <Col lg={3} className="d-none d-lg-block">
                    <h3>Course Manager</h3>
                </Col>
                <Col xs={8} lg={6} className={"mb-2"}>
                    <Form>
                        <Form.Label htmlFor={"courseName"} srOnly>
                            Course Name
                        </Form.Label>
                        <FormControl
                            id="courseName"
                            type="text"
                            name="courseName"
                            placeholder="Course name here..."
                            aria-label="Course to add"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </Form>
                </Col>
                <Col xs={3} lg={2} className="text-right">
                    <FontAwesomeIcon icon={"plus-circle"} size={"2x"} color={"red"} className={"mr-1"}
                                     onClick={() => newCourse()}/>
                    <Link to="/">
                        <FontAwesomeIcon icon={"home"} size={"2x"} className={"mr-2"}/>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default CourseTopBar