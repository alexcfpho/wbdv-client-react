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
    }
    return (
        <div>
            <Row>
                <Col xs={1} sm={1} md={1} lg={1}>
                    <FontAwesomeIcon className="mt-2" icon={"bars"} size={"lg"}/>
                </Col>
                <Col lg={4} className="d-none d-lg-block">
                    <h2>Course Manager</h2>
                </Col>
                <Col xs={8} sm={8} md={9} lg={5}>
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
                <Col xs={3} sm={3} md={2} lg={2} className={"pull-right"}>
                    <Link to="/">
                        <FontAwesomeIcon icon={"home"} size={"2x"} pull={"right"}/>
                    </Link>
                    <FontAwesomeIcon icon={"plus-circle"} size={"2x"} pull={"right"} color={"red"}
                                     onClick={() => newCourse()}/>
                </Col>
            </Row>
        </div>
    )
}

export default CourseTopBar