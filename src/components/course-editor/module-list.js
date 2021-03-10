import React, {useEffect} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux'
import EditableItem from "../editable-item";
import {useParams} from "react-router-dom";

import moduleService from "../../services/module-service";

const ModuleList = (
    {
        listOfModules = [],
        createModule,
        deleteModule,
        updateModule,
        findModulesForCourse
    }) => {
    const {layout, courseId, moduleId} = useParams()
    useEffect(() => {
        findModulesForCourse(courseId)
    }, [findModulesForCourse, courseId])
    return (
        <div>
            <h3>Modules</h3>
            <ul className="list-group text-white wbdv-module-list">
                {
                    listOfModules.map(module =>
                        <li className={`list-group-item wbdv-module-item ${module._id === moduleId ? 'active' : ''}`}
                            key={module._id}>
                            <EditableItem
                                to={`/courses/${layout}/edit/${courseId}/modules/${module._id}`}
                                deleteItem={deleteModule}
                                updateItem={updateModule}
                                item={module}
                                active={module._id === moduleId}
                            />
                        </li>
                    )
                }
                <a href="#" className="p-2 wbdv-module-item-add-btn mt-2">
                    <FontAwesomeIcon icon={"plus"} size={"2x"} pull={"right"}
                                     onClick={() => createModule(courseId)}/>
                </a>
            </ul>
        </div>)
}

const stpm = (state) => {
    return {
        listOfModules: state.moduleReducer.modules
    }
}

// To dispatch function with state
const dptm = (dispatch) => {
    return {
        createModule: (courseId) => {
            moduleService.createModule(courseId, {title: "New Module"})
                .then(theActualModule => dispatch({
                    type: "CREATE_MODULE",
                    module: theActualModule
                }))
        },
        updateModule: (module) => {
            moduleService.updateModule(module._id, module)
                .then(status => dispatch({
                    type: "UPDATE_MODULE",
                    module: module // You can also just do module since the param and value are the same.
                }))
        },
        deleteModule: (item) =>
            moduleService.deleteModule(item._id)
                .then(status => dispatch({
                    type: "DELETE_MODULE",
                    moduleToDelete: item
                })),
        findModulesForCourse: (courseId) => {
            moduleService.findModulesForCourse(courseId)
                .then(modules => dispatch({
                        type: "FIND_MODULES_FOR_COURSE",
                        modules
                    })
                )
        }
    }
}

export default connect(stpm, dptm)(ModuleList)