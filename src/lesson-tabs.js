import React from 'react'
import {connect} from 'react-redux'
import EditableItem from "./components/editable-item";
import {useParams} from "react-router-dom";

const LessonTabs = ({listOfLessons}) => {

    const {courseId, moduleId} = useParams();

    return (<div className={"col-8"}>
        <div className={"row"}>
            <h3>Lessons {courseId} {moduleId}</h3>
            <ul className="nav nav-tabs col-11 wbdv-lesson-list">
                {
                    listOfLessons.map(lesson =>
                        <li className={"nav-item"}>
                            <EditableItem
                                to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                                item={lesson}/>
                        </li>
                    )
                }
            </ul>
        </div>
    </div>)
}

const stpm = (state) => {
    return {
        listOfLessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => ({})


export default connect(stpm, dtpm)(LessonTabs)