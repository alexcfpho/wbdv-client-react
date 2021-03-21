const initialWidgets = {
    widgets: []
}

const widgetReducer = (state = initialWidgets, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "FIND_WIDGET_BY_ID":
            return {
                widgets: state.widgets.find(widget => widget.id === action.widget.id)
            }

        case "FIND_ALL_WIDGETS":
            return {
                ...state,
                widgets: action.widgets
            }
        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget => {
                    if (widget.id === action.widget.id) {
                        return action.widget
                    } else {
                        return widget
                    }
                })
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => {
                    return widget.id !== action.widgetToDelete.id;
                })
            }
        default:
            return state
    }
}

export default widgetReducer

