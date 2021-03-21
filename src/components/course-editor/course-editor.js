import React, {useEffect, useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './course-editor.css'
import '../../styles.css'

import {Link, useParams} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicPills from "./topic-pills";
import moduleReducer from "../../reducers/modules-reducer";
import lessonReducer from "../../reducers/lessons-reducer";
import topicReducer from "../../reducers/topic-reducer"
import widgetReducer from "../../reducers/widget-reducer";
import courseService from "../../services/course-service";
import WidgetList from "./widgets/widget-list";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer,
    widgetReducer: widgetReducer
})

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const CourseEditor = () => {

    const {courseId, layout} = useParams();
    const [currTitle, setCourseTitle] = useState('');

    useEffect(() => {
        courseService.findCourseById(courseId)
            .then(course => setCourseTitle(course.title))
    }, [courseId])

    return (
        <Provider store={store}>
            <div>
                <div className="row wbdv-header p-2">
                    <div className="col-4">
                        <Link to={`/courses/${layout}`}>
                            <FontAwesomeIcon icon={"times"} size={"lg"} pull={"left"} className={"ml-1 mt-3"}/>
                        </Link>
                        <h2 className="wbdv-header-title mt-2">
                            {currTitle}
                        </h2>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 wbdv-module-bg p-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <TopicPills/>
                        {/* Preview Button */}
                        <div>
                            <div className="row mt-3">
                                <div className="col-12">
                                <span className="float-right">
                                    <button className="btn btn-success btn-sm mr-2">Save</button>
                                    <div className="custom-control custom-switch d-inline mt-3">
                                        <input type="checkbox" className="custom-control-input" id="customSwitch1"/>
                                        <label className="custom-control-label" htmlFor="customSwitch1">Preview</label>
                                  </div>
                              </span>
                                </div>
                            </div>
                            {/* Widgets */}
                            <ul className="list-group mt-3">
                                <li className="list-group-item">
                                    <WidgetList/>
                                </li>
                            </ul>
                        </div>
                        <button className="btn rounded-circle btn-danger float-right m-2">
                            <i className="fa fa-plus"/>
                        </button>
                    </div>
                </div>
            </div>
        </Provider>)
}

export default CourseEditor