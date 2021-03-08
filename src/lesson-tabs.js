import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import EditableItem from "./components/editable-item";
import {useParams} from "react-router-dom";
import lessonService from './services/lesson-service'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LessonTabs = (
    {
        listOfLessons = [],
        createLessonForModule,
        deleteLessonForModule,
        updateLesson,
        findLessonsForModule,
        findLesson
    }) => {

    const {courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [findLessonsForModule, moduleId])

    return (
        <div>
            <h3>Lessons {lessonId}</h3>
            <ul className="nav nav-tabs col-11 wbdv-lesson-list">
                {
                    listOfLessons.map(lesson =>
                        <li className={"nav-item"}>
                            <EditableItem
                                // Validate the lesson id of the selected object matches the id param from URL.
                                active={lesson._id === lessonId}
                                to={`/courses/editor/${courseId}/${moduleId}/${lesson._id}`}
                                deleteItem={deleteLessonForModule}
                                updateItem={updateLesson}
                                findItem={findLesson}
                                item={lesson}
                                key={lesson._id}
                            />
                        </li>
                    )
                }
                <li>
                    <FontAwesomeIcon icon={"plus"} onClick={() => {
                        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
                            createLessonForModule(moduleId)
                        } else {
                            alert('Select a Module first, cannot create Lesson with no parent module.')
                        }
                    }
                    }/>
                </li>
            </ul>
        </div>
    )
}

const stpm = (state) => {
    return {
        listOfLessons: state.lessonReducer.lessons
    }
}

const dtpm = (dispatch) => ({
    findLessonsForModule: (moduleId) => {
        lessonService.findLessonsForModule(moduleId)
            // .then(lessons => console.log(lessons))
            .then((lessons => dispatch({
                    type: "FIND_LESSONS",
                    lessons
                }))
            )
    },
    findLesson: (lessonId) => {
        lessonService.findLesson(lessonId)
            .then(lesson => dispatch({
                // .then(lesson => console.log(lesson._id))
                type: "FIND_LESSON",
                lesson
            }))
    },
    createLessonForModule: (moduleId) => {
        lessonService.createLessonForModule(moduleId, {title: "New Lesson"})
            .then(lesson => dispatch({
                type: "CREATE_LESSON",
                lesson
            }))
    },
    deleteLessonForModule: (lesson) => {
        lessonService.deleteLessonForModule(lesson._id)
            .then(status => dispatch({
                type: "DELETE_LESSON",
                lessonToDelete: lesson
            }))
    },
    updateLesson: (lesson) => {
        lessonService.updateLesson(lesson._id, lesson)
            .then(status => dispatch({
                type: "UPDATE_LESSON",
                lesson
            }))
    }
})


export default connect(stpm, dtpm)(LessonTabs)