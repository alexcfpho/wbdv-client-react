import React from 'react'
import CourseRow from "./course-row";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

import '../../styles.css'

class CourseTable extends React.Component {

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th className="d-none d-md-table-cell">Owned by</th>
                        <th className="d-none d-lg-table-cell">Last modified</th>

                        <th className="wbdv-icons-body text-right">
                            <FontAwesomeIcon icon={"folder"} order={1} size={"lg"} className="mr-3"/>
                            <FontAwesomeIcon icon={"sort-alpha-up"} order={2} size={"lg"} className="mr-3"/>
                            <Link to={"/courses/grid"}>
                                <FontAwesomeIcon icon={"th"} order={3} size={"lg"} className="mr-1"/>
                            </Link>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course, index) =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
                                updateCourse={this.props.updateCourse}
                                key={index}
                                course={course}
                                title={course.title}
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

export default CourseTable