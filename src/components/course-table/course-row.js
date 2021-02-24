import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
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
            <td className="d-md-table-cell">
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
            <td className="d-none d-md-table-cell">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td className="text-right">
                {!editing && <FontAwesomeIcon icon={faEdit} size={"lg"} className={"wbdv-icons-body"}
                                              onClick={() => setEditing(true)}/>}
                {editing && <FontAwesomeIcon icon={faCheck} size={"lg"} className="mr-2"
                                             onClick={() => saveTitle()}/>
                }
                {editing && <FontAwesomeIcon icon={faTrash} size={"lg"} onClick={() => {
                    deleteCourse(course);
                    setEditing(false);
                }}/>
                }
            </td>
        </tr>
    )
}
export default CourseRow
