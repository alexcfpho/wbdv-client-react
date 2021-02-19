import React from 'react'
import CourseRow from "./course-row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class CourseTable
    extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return(
            <div>
                <Link to={"/courses/grid"}>
                    <FontAwesomeIcon icon={"list"} size={"2x"} pull={"right"}/>
                </Link>
                <h2>Course Table</h2>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th className="d-sm-table-cell">Title</th>
                        <th className="d-none d-md-table-cell">Owned by</th>
                        <th className="d-none d-md-table-cell">Last modified</th>
                        <th className="d-none d-md-table-cell">
                            <FontAwesomeIcon icon={"th"}/>
                            <FontAwesomeIcon icon={"sort-alpha-up"}/>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course, index) =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                key = {index}
                                course={course}
                                title= {course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}