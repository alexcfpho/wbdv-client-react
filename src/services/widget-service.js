const TOPICS_LOCAL_URL = "http://localhost:8080/api/topics";
// const TOPICS_URL = "https://wbdv-generic-server.herokuapp.com/api/apho/topics"
const WIDGETS_LOCAL_URL = "http://localhost:8080/api/widgets";
// const WIDGETS_URL = "https://wbdv-generic-server.herokuapp.com/api/widgets"

export const createWidget = (topicId, widget) =>
    fetch(`${TOPICS_LOCAL_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`${TOPICS_LOCAL_URL}/${topicId}/widgets`)
        .then(response => response.json())

export const findWidgetById = (widgetId) =>
    fetch(`${WIDGETS_LOCAL_URL}/${widgetId}`)
        .then(response => response.json())

export const findAllWidgets = () =>
    fetch(`${WIDGETS_LOCAL_URL}`)
        .then(response => response.json())

export const updateWidget = (wid, widget) =>
    fetch(`${WIDGETS_LOCAL_URL}/${wid}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteWidget = (wid) =>
    fetch(`${WIDGETS_LOCAL_URL}/${wid}`, {
        method: "DELETE",
    })
        .then(response => response.json())

const api = {
    findWidgets: findWidgetsForTopic,
    findWidgetsById: findWidgetById,
    createWidgetForTopic: createWidget,
    updateWidget,
    deleteWidget
};

export default api;
