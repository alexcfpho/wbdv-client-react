import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";


const CourseRow = ({deleteCourse, course, lastModified, title, owner}) =>
        <tr>
            <td>{title}</td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
                <FontAwesomeIcon icon={faCheck} size={"lg"}/>
                <FontAwesomeIcon icon={faTrash} size={"lg"} onClick={() => deleteCourse(course)} />
                <FontAwesomeIcon icon={faEdit} size={"lg"} />
            </td>
        </tr>

export default CourseRow
