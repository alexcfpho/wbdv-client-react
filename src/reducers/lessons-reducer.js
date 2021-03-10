const initialLessons = {
    lessons: []
}

const lessonReducer = (state = initialLessons, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS_FOR_MODULE":
            return {
                ...state,
                lessons: action.lessons
            }
        case "FIND_LESSON":
            return {
                lesson: state.lessons.find(lesson => lesson._id === action.lesson._id)
            }
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => {
                    return lesson._id !== action.lessonToDelete._id;
                })
            }
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(lesson => {
                    if (lesson._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return lesson
                    }
                })

            }
        default:
            return state
    }
}

export default lessonReducer

