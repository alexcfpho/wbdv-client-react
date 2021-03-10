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
import courseService from "../../services/course-service";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
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
                        {/* Widgets */}
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
                            <ul className="list-group mt-3">
                                <li className="list-group-item">
                                    <div>
                                        <h3 className="d-inline">Heading Widget</h3>
                                        {/* Heading with Buttons */}
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
                    </span>
                                        <div className="form-group pt-3">
                                            <input className="form-control" placeholder="Heading text"/>
                                        </div>
                                        <div className="form-group">
                                            <select className="form-control">
                                                <option>Heading 1</option>
                                                <option>Heading 2</option>
                                                <option>Heading 3</option>
                                                <option>Heading 4</option>
                                                <option>Heading 5</option>
                                                <option>Heading 6</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" placeholder="Widget name"/>
                                        </div>
                                        <h3>Preview</h3>
                                        <h1>Heading text</h1>
                                    </div>
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