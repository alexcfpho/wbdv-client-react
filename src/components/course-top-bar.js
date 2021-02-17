import React from "react";
import {Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class CourseTopBar extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <h2>Course Manager</h2>
                <FontAwesomeIcon icon={"bars"} size={"lg"}/>
                <Form>
                    <Form.Group as={Row}>
                        <InputGroup className="mb-3">
                            <FormControl
                                type="text"
                                placeholder="Course name here..."
                                aria-label="Course to add"
                            />
                        </InputGroup>
                    </Form.Group>
                </Form>
                <FontAwesomeIcon icon={"plus-circle"} size={"2x"} pull={"right"} color={"red"}
                                 onClick={this.props.addCourse}/>
            </div>
        )
    }
}