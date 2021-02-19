import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheck, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const CourseRow = (
    {deleteCourse, updateCourse, course, lastModified, title, owner}) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)

    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    return (
        <tr>
            <td>
                {
                    !editing &&
                    <Link to={"/courses/editor"}>
                        {title}</Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }

            </td>
            <td>{owner}</td>
            <td>{lastModified}</td>
            <td>
                <FontAwesomeIcon icon={faTrash} size={"lg"} onClick={() => deleteCourse(course)}/>
                {!editing && <FontAwesomeIcon icon={faEdit} size={"lg"} onClick={() => setEditing(true)}/>}
                {editing && <FontAwesomeIcon icon={faCheck} size={"lg"} onClick={() => saveTitle()}/>}
            </td>
        </tr>
    )
}
export default CourseRow
