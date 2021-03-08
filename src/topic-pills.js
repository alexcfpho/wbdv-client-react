import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import EditableItem from "./components/editable-item";
import {useParams} from 'react-router-dom';
import topicService from './services/topic-service';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TopicPills = (
    {
        listOfTopics = [],
        createTopicForLesson,
        findTopicsForLesson,
        findTopic,
        updateTopic,
        deleteTopic
    }) => {

    const {courseId, moduleId, lessonId, topicId} = useParams();

    useEffect(() => {
        if (
            lessonId !== "undefined" && typeof lessonId !== "undefined") {
            findTopicsForLesson(lessonId)
        } else {

        }
    }, [findTopicsForLesson, lessonId])

    return (
        <div>
            <h4>Topics {topicId}</h4>
            <ul className="nav nav-pills wbdv-topic-pill-list mt-3">
                {
                    listOfTopics.map(topic =>
                        <li className="nav-item wbdv-topic-pill-list">
                            key={topic._id}
                            <EditableItem
                                active={topic._id === topicId}
                                to={`/courses/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                item={topic}
                                deleteItem={deleteTopic}
                                updateItem={updateTopic}
                                findItem={findTopic}
                            />
                        </li>
                    )
                }
                <li>
                    <FontAwesomeIcon icon={"plus"} onClick={() => {
                        if (lessonId !== "undefined" && typeof lessonId !== "undefined") {
                            createTopicForLesson(lessonId)
                        } else {
                            alert('Select a Lesson first, cannot create a Topic with no parent Lesson.')
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
        listOfTopics: state.topicReducer.topics
    }
}

const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                    type: "FIND_TOPICS",
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
    createTopicForLesson: (lessonId) => {
        topicService.createTopicForLesson(lessonId, {title: "New Topic"})
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