const initialModules = {
    modules: [
        // {_id: 123, title: "Module 123"},
        // {_id: 234, title: "Module 234"},
        // {_id: 345, title: "Module 345"}
    ]
}

const moduleReducer = (state = initialModules, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            // alert("Create Module reducer")
            const newState = {
                modules: [
                    ...state.modules,
                    action.module
                ]
            }
            return newState
        case "FIND_MODULES_FOR_COURSE":
            return {
                ...state,
                modules: action.modules
            }
        case "DELETE_MODULE":
            // alert('delete module')
            const newState1 = {
                modules: state.modules.filter(module => {
                    if (module._id === action.moduleToDelete._id) {
                        // The action.moduleToDelete needs to match moduleList
                        return false
                    } else {
                        return true
                    }
                })
            }
            return newState1
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(m => {
                    if (m._id === action.module._id) {
                        return action.module
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}
export default moduleReducer