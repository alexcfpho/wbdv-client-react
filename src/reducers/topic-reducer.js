const initialTopics = {
    topics: []
}

const topicReducer = (state = initialTopics, action) => {
    switch (action.type) {
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS":
            return {
                ...state,
                topics: action.topics
            }
        case "FIND_TOPIC":
            return {
                topics: state.topics.find(topic => topic._id === action.lesson._id)
            }
        case "UPDATE_TOPIC":
            return {
                topics: state.topics.map(topic => {
                    if (topic._id === action.topic._id) {
                        return action.topic
                    } else {
                        return topic
                    }
                })
            }
        case "DELETE_TOPIC":
            return {
                topics: state.topics.filter(topic => {
                    return topic._id !== action.topicToDelete._id;
                })
            }
        default:
            return state
    }
}

export default topicReducer