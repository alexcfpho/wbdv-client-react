import React from 'react'
import CourseTable from "./course-table";
import CourseGrid from "./course-grid";
import CourseEditor from "./course-editor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseTopBar from "./course-top-bar";

class CourseManager extends React.Component {

    state = {
        courses: [
            {title: "CS5610", owner: "john", lastModified: "1/1/2020"},
            {title: "CS5800", owner: "virgil", lastModified: "2/4/2021"},
            {title: "CY6620", owner: "gupta", lastModified: "05/8/2022"},
            {title: "CY2405", owner: "alex", lastModified: "12/21/2021"},
        ]
    }

    addCourse = () => {
        const newCourse = {
            title: "New Course",
            owner: "New Owner",
            lastModified: "Never"
        }
        this.state.courses.push(newCourse)
        this.setState(this.state)
    }

    deleteCourse = (courseToDelete) => {
        console.log(courseToDelete)
        const newCourses = this.state.courses
            .filter(course => course !== courseToDelete)
        this.setState({
            courses: newCourses
        })
    }

    // editCourse = (courseToEdit) => {
    //     console.log(courseToEdit)
    //     const editedCourse = this.state.courses
    //         .find()
    // }

    render() {
        return(
            <div>
                <CourseTopBar addCourse={this.addCourse} courses={this.state.courses}/>
                <CourseTable deleteCourse={this.deleteCourse} courses={this.state.courses}/>
                {/*<CourseGrid deleteCourse={this.deleteCourse} courses={this.state.courses}/>*/}
                {/*<CourseEditor/>*/}
            </div>
        )
    }
}



export default CourseManager
