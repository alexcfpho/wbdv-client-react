import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "../editable-item";
import {useParams} from 'react-router-dom';
import topicService from '../../services/topic-service';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TopicPills = (
    {
        listOfTopics = [],
        createTopic,
        findTopicsForLesson,
        updateTopic,
        deleteTopic
    }) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams();
    const hasLesson = lessonId !== 'undefined' && typeof lessonId !== 'undefined';
    const hasModule = moduleId !== 'undefined' && typeof moduleId !== 'undefined';
    const hasCourse = courseId !== 'undefined' && typeof courseId !== 'undefined';
    const showTopics = hasModule && hasLesson && hasCourse;

    useEffect(() => {
        if (showTopics) {
            findTopicsForLesson(lessonId)
        }
    }, [showTopics, findTopicsForLesson, lessonId])

    return (
        <>
            {showTopics &&
            <div>
                <h4 className="mt-2">Topics</h4>
                <ul className="nav nav-pills wbdv-topic-pill-list mt-2">
                    {
                        listOfTopics.map((topic, index) =>
                            <li className="nav-item wbdv-topic-pill-list" key={index}>
                                <EditableItem
                                    active={topic._id === topicId}
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topic._id}`}
                                    item={topic}
                                    deleteItem={deleteTopic}
                                    updateItem={updateTopic}
                                />
                            </li>
                        )
                    }
                    <li>
                        <FontAwesomeIcon icon={"plus"} className="ml-1" onClick={() => {
                            if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
                                createTopic(lessonId)
                            } else {
                                alert('Select a Lesson first, cannot create a Topic with no parent Lesson.')
                            }
                        }
                        }/>
                    </li>
                </ul>
            </div>
            }
        </>
    )
}

const stpm = (state) => {
    return {
        listOfTopics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                    type: "FIND_TOPICS_FOR_LESSON",
                    topics
                })
            )
    },
    findTopic: (topic) => {
        topicService.findTopic(topic._id)
            .then(topic => dispatch({
                    type: "FIND_TOPIC",
                    topic
                })
            )
    },
    createTopic: (lessonId) => {
        topicService.createTopic(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                    type: "CREATE_TOPIC",
                    topic
                })
            )
    },
    updateTopic: (topic) => {
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                    type: "UPDATE_TOPIC",
                    topic
                })
            )
    },
    deleteTopic: (topic) => {
        topicService.deleteTopic(topic._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: topic
            }))
    }
})

export default connect(stpm, dtpm)(TopicPills)