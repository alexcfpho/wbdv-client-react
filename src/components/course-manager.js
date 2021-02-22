import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import CourseTopBar from "./course-top-bar";
import {Route} from "react-router-dom";

import courseService from "../services/course-service";

class CourseManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: []
        }
    }

    componentDidMount() {
        courseService.findAllCourses()
            .then(courses => this.setState({
                courses
            }))
    }

    //@TODO add input validation for empty string
    createCourse = (courseObj) => {
        const aCourse = {
            title: courseObj.title,
            owner: courseObj.owner,
            lastModified: courseObj.lastModified
        }
        courseService.createCourse(aCourse)
            .then(c => this.setState(
                (previousState) => ({
                    ...previousState,
                    courses: [
                        ...previousState.courses,
                        c
                    ]
                })))
    }

    deleteCourse = (courseToDelete) => {
        courseService.deleteCourse(courseToDelete._id)
            .then(status => {
                this.setState((prevState) => ({
                    ...prevState,
                    courses: prevState.courses.filter
                    (course => course !== courseToDelete)
                }))
            })
    }

    updateCourse = (course) => {
        console.log(course)
        courseService.updateCourse(course._id, course)
            .then(status => this.setState((prevState) => ({
                ...prevState,
                courses: prevState.courses.map(
                    (c) => c._id === course._id ? course : c)
            })))
    }

    render() {
        return (
            <div>
                <CourseTopBar
                    courses={this.state.courses}
                    createCourse={this.createCourse}
                />
                <Route path="/courses/table">
                    <CourseTable
                        updateCourse={this.updateCourse}
                        deleteCourse={this.deleteCourse}
                        courses={this.state.courses}/>
                </Route>
                <Route path="/courses/grid"
                       render={(props) => {
                           console.log(props)
                           return <CourseGrid
                               updateCourse={this.updateCourse}
                               deleteCourse={this.deleteCourse}
                               courses={this.state.courses}/>
                       }}>
                </Route>
                <Route path="/courses/editor"
                       render={(props) =>
                           <CourseEditor {...props} />
                       }>
                </Route>
            </div>
        )
    }
}
    export default CourseManager
