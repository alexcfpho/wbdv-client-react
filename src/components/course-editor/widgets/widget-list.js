import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";

import widgetService from '../../../services/widget-service';

const WidgetList = (
    {
        listOfWidgets = [],
        createWidget,
        deleteWidget,
        updateWidget,
        findWidgetsForTopic,
    }) => {

    const {layout, courseId, moduleId, lessonId, topicId, widgetId} = useParams()


    useEffect(() => {
        if (topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [findWidgetsForTopic, topicId])

    return (
        <>
            {/* Heading with Buttons */}
            <h3 className="d-inline">Heading Widget</h3>
            <span className="float-right">
                <button className="btn btn-sm btn-warning mr-1">
                    <i className="fa fa-arrow-up"/>
                </button>
                <button className="btn btn-sm btn-warning mr-4">
                    <i className="fa fa-arrow-down"/>
                </button>
                <select className="form-control-sm mr-3">
                    <option>Heading</option>
                    <option>Heading 2</option>
                    <option>Heading 3</option>
                    <option>Heading 4</option>
                    <option>Heading 5</option>
                </select>
                <button className="btn btn-sm btn-danger">
                    <i className="fa fa-trash"/>
                </button>
                <FontAwesomeIcon icon={"plus"} className="lg mt-1" pull={"right"}
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