import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

import widgetService from '../../../services/widget-service';
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = (
    {
        listOfWidgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic,
    }) => {

    const {layout, courseId, moduleId, lessonId, topicId} = useParams()
    const hasCourse = courseId !== 'undefined' && typeof courseId !== 'undefined';
    const hasModule = moduleId !== 'undefined' && typeof moduleId !== 'undefined';
    const hasLesson = lessonId !== 'undefined' && typeof lessonId !== 'undefined';
    const hasTopics = topicId !== 'undefined' && typeof topicId !== 'undefined';
    const showWidgets = hasCourse && hasModule && hasLesson && hasTopics;

    useEffect(() => {
        if (showWidgets) {
            findWidgetsForTopic(topicId)
        }
    }, [showWidgets, findWidgetsForTopic, topicId])

    return (
        <>
            {/* Heading with Buttons */}
            <h3 className="d-inline-block">Widgets</h3>
            <span className="float-right">
                <button className="btn btn-sm btn-warning mr-1">
                    <FontAwesomeIcon icon={"arrow-up"}/>
                </button>
                <button className="btn btn-sm btn-warning mr-4">
                    <FontAwesomeIcon icon={"arrow-down"}/>
                </button>
                <select className="form-control-sm mr-3">
                    <option>Heading 1</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                    <option>Heading 5</option>
                    <option>Heading 6</option>
                </select>
                <button className="btn btn-sm btn-danger mr-2">
                    <FontAwesomeIcon icon={"trash"}/>
                </button>
                <FontAwesomeIcon icon={"plus"} className={"mr-2"} pull={"right"} size={"2x"}
                                 onClick={() => createWidget(topicId)}/>
            </span>

            <ul className="list-group">
                {
                    listOfWidgets.map(widget =>
                        <li className={"list-group-item"} key={widget.id}>
                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                    back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                    widget={widget}
                                    updateItem={updateWidget}
                                    deleteItem={deleteWidget}
                                />

                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                    back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                    widget={widget}
                                    updateItem={updateWidget}
                                    deleteItem={deleteWidget}
                                />
                            }
                            {
                                widget.type === "LIST" &&
                                <ListWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                    back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                    widget={widget}
                                    updateItem={updateWidget}
                                    deleteItem={deleteWidget}
                                />
                            }
                            {
                                widget.type === "IMAGE" &&
                                <ImageWidget
                                    to={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}/widgets/${widget.id}`}
                                    back={`/courses/${layout}/edit/${courseId}/modules/${moduleId}/lessons/${lessonId}/topics/${topicId}`}
                                    widget={widget}
                                    updateItem={updateWidget}
                                    deleteItem={deleteWidget}
                                />
                            }
                        </li>
                    )
                }
            </ul>
        </>
    )
}

const stpm = (state) => {
    return {
        listOfWidgets: state.widgetReducer.widgets
    }
}

const dptm = (dispatch) => {
    return {
        createWidget: (topicId) => {
            widgetService.createWidget(topicId, {text: "New Widget", type: "HEADING", size: 1})
                .then(widget => dispatch({
                    type: "CREATE_WIDGET",
                    widget
                }))
        },
        findWidgetsForTopic: (topicId) => {
            widgetService.findWidgetsForTopic(topicId)
                .then(widgets => dispatch({
                    type: "FIND_WIDGETS_FOR_TOPIC",
                    widgets
                }))
        },
        findWidgetById: (widget) => {
            widgetService.findWidgetById(widget.id)
                .then(widget => dispatch({
                    type: "FIND_WIDGET_BY_ID",
                    widget
                }))
        },
        findAllWidgets: () => {
            widgetService.findAllWidgets()
                .then(widgets => dispatch({
                    type: "FIND_ALL_WIDGETS",
                    widgets
                }))
        },
        updateWidget: (widget) => {
            widgetService.updateWidget(widget.id, widget)
                .then(status => dispatch({
                    type: "UPDATE_WIDGET",
                    widget
                }))
        },
        deleteWidget: (widget) => {
            widgetService.deleteWidget(widget.id)
                .then(status => dispatch({
                    type: "DELETE_WIDGET",
                    widgetToDelete: widget
                }))
        }
    }
}

export default connect(stpm, dptm)(WidgetList)