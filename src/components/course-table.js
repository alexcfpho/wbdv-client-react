import React from 'react'
import CourseRow from "./course-row";

export default class CourseTable
    extends React.Component {

    // Implementing this as a class so we need to pass the parameter (properties)
    // into an overloaded constructor, as component expects props passed to itself.

    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return(
            <div>
                <h2>Course Table</h2>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th className="d-sm-table-cell">Title</th>
                        <th className="d-none d-md-table-cell">Owned by</th>
                        <th className="d-none d-md-table-cell">Last modified</th>
                        <th className="d-none d-md-table-cell">
                            <i className="fas fa-th"></i>
                            <i className="fas fa-sort-alpha-up"></i>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.courses.map((course, index) =>
                            <CourseRow
                                deleteCourse={this.props.deleteCourse}
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