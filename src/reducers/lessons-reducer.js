const initialLessons = {
    lessons: [
        {_id: "123", title: "Build"},
        {_id: "456", title: "Pages"},
        {_id: "789", title: "Theme"},
        {_id: "100", title: "Store"},
        {_id: "101", title: "Apps"},
        {_id: "102", title: "Settings"},
    ]
}

const lessonReducer = (state = initialLessons, action) => {
    switch (action.type) {
        case "CREATE LESSON":
        case "DELETE LESSON":
        default:
            return state
    }
}

export default lessonReducer

