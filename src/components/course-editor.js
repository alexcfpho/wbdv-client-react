import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CourseEditor = ({history}) =>
    <div>
        <FontAwesomeIcon icon={"arrow-left"} size={"2x"} pull={"right"}
                         onClick={() => history.goBack()}/>
        <h2>editor html to go here</h2>
    </div>

export default CourseEditor