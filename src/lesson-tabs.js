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

    const {layout, courseId, moduleId, lessonId} = useParams();

    useEffect(() => {
        if (moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findLessonsForModule(moduleId)
        }
    }, [findLessonsForModule, moduleId])

    return (
        <div>
            <h3 className="mt-3">Lessons</h3>
            <ul className="nav nav-tabs col-11">
                {
                    listOfLessons.map((lesson, index) =>
                        <li className="nav-item" key={index}>
                            <EditableItem
                                active={lesson._id === lessonId}
                                to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}
                                deleteItem={deleteLessonForModule}
                                updateItem={updateLesson}
                                findItem={findLesson}
                                item={lesson}
                            />
                        </li>
                    )
                }
                <li>
                    <FontAwesomeIcon icon={"plus"} className="ml-1" onClick={() => {
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