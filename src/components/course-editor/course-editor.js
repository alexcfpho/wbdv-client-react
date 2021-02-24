import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import './course-editor.css'
import '../../styles.css'

import {Link} from "react-router-dom";

const CourseEditor = ({history}) =>
    <div>
        <div className="row wbdv-header p-2">
            <div className="col-4">
                <h2 className="wbdv-header-title mt-1 ml-2">
                    <FontAwesomeIcon icon={"arrow-left"} size="lg" pull={"left"} className={"mr-4 wbdv-back-btn"}
                                     onClick={() => history.goBack()}/>
                    Course Editor
                </h2>

                <Link to={"/courses/"}>
                    <FontAwesomeIcon icon={"times"} size={"lg"} pull={"left"} className={"ml-3 mt-2"}/>
                </Link>

            </div>
            {/* Lessons */}
            <div className="col-8">
                {/* Nested row for nav */}
                <div className="row">
                    <ul className="nav nav-tabs col-11 wbdv-lesson-list">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Build
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link active">
                                Pages
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Theme
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Store
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Apps
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Settings
                            </a>
                        </li>
                    </ul>
                    <div className="col-1 mt-1">
                        <a href="#" className="text-white">
                            <i className="fa-2x fas fa-plus"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* Modules */}
        <div className="row">
            <div className="col-4 wbdv-module-bg p-4">
                <ul className="list-group text-white wbdv-module-list">
                    <li className="list-group-item wbdv-module-item">
                        {/* Currently not used, but maybe in the future? */}
                        <span className="wbdv-module-item-title">Module 1 - JQuery</span>
                        <a href="#" className="wbdv-module-item-delete-btn"><i className="fas fa-times"/></a>
                    </li>
                    <li className="list-group-item active wbdv-module-item">
                        <span className="wbdv-module-item-title">Module 2 - React</span>
                        <a href="#" className="wbdv-module-item-delete-btn"><i className="fas fa-times"/></a>
                    </li>
                    <li href="#" className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Module 3 - Redux</span>
                        <a href="#" className="wbdv-module-item-delete-btn"><i className="fas fa-times"/></a>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Module 4 - Node.js</span>
                        <a href="#" className="wbdv-module-item-delete-btn"><i className="fas fa-times"/></a>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Module 5 - Angular</span>
                        <a href="#" className="wbdv-module-item-delete-btn"><i className="fas fa-times"/></a>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Module 6 - Mongo</span>
                        <a href="#" className="wbdv-module-item-delete-btn"><i className="fas fa-times"/></a>
                    </li>
                    <li className="list-group-item wbdv-module-item">
                        <span className="wbdv-module-item-title">Module 7 - JS</span>
                        <a href="#" className="wbdv-module-item-delete-btn"><i className="fas fa-times"/></a>
                    </li>
                </ul>
                <a href="#" className="float-right p-2 wbdv-module-item-add-btn mt-2"><i className="fa-2x fas fa-plus"/></a>
            </div>
            {/* Topics */}
            <div className="col-8">
                <ul className="nav nav-pills wbdv-topic-pill-list mt-3">
                    <li className="nav-item wbdv-topic-pill-list">
                        <a href="#" className="nav-link text-white m-2 wbdv-topic-pill">
                            Topic 1
                        </a>
                    </li>
                    <li className="nav-item wbdv-topic-pill-list">
                        <a href="#" className="nav-link text-white m-2 active wbdv-topic-pill">
                            Topic 2
                        </a>
                    </li>
                    <li className="nav-item wbdv-topic-pill-list">
                        <a href="#" className="nav-link text-white m-2 wbdv-topic-pill">
                            Topic 3
                        </a>
                    </li>
                    <li className="nav-item wbdv-topic-pill-list">
                        <a href="#" className="nav-link text-white m-2 wbdv-topic-pill">
                            Topic 4
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link text-white m-2 wbdv-topic-add-btn">
                            <i className="fas fa-plus"/>
                        </a>
                    </li>
                </ul>
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

export default CourseEditor